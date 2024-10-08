import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import ReviewFormModal from './ReviewFormModal'
import { db } from '../utils/fireBaseConfig.js'
import { collection, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore'
import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Text, Heading, SimpleGrid, Select } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Pagination from './Pagination.jsx'
import BubbleBg from './BubbleBg.jsx'



export default function Reviews() {

  const { t } = useTranslation()

  const navigate = useNavigate()
  const [reviews, setReviews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [reviewsPerPage, setReviewsPerPage] = useState(10)


  useEffect(() => {
    // Fetch reviews from Firestore when the component mounts
    const fetchReviews = async () => {
      const q = query(collection(db, 'reviews'), orderBy('timestamp', 'desc'))
      const querySnapshot = await getDocs(q)
      setReviews(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    }
    fetchReviews()
  }, [])


  const handleBackClick = () => {
    navigate('/')
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    })
  }

  const handleReviewSubmit = async ({ name, email, rating, review }, setError) => {
    // Check if a review with the same email already exists
    try {
      const q = query(collection(db, 'reviews'), where('email', '==', email))
      const existingReviews = await getDocs(q)

      if (!existingReviews.empty) {
        setError('email', t("emailError"))
        return
      }

      await addDoc(collection(db, 'reviews'), {
        name,
        email,
        rating,
        review,
        timestamp: new Date(),
      })

      // Fetch the updated list of reviews after adding a new one
      const updatedReviews = await getDocs(query(collection(db, 'reviews')))
      setReviews(updatedReviews.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    } catch (error) {
      console.error('Error submitting review:', error)
      setError('submit', t("submitError"))
    }
  }

  const handlePerPageChange = (e) => {
    setReviewsPerPage(Number(e.target.value))
    setCurrentPage(1)  // Reset to first page when per page value changes
  }

  const indexOfLastReview = currentPage * reviewsPerPage
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview)

  return (
    <BubbleBg>
      <div className='header-section'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className='review-svg'>
  <defs>
    <radialGradient id="starGradient" cx="50%" cy="50%" r="50%" fx="25%" fy="25%">
      <stop offset="0%" stopColor="#FFD700" />
      <stop offset="100%" stopColor="#FFC700" />
    </radialGradient>
    <filter id="starShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
      <feOffset dx="2" dy="2" result="offsetblur" />
      <feFlood floodColor="rgba(0,0,0,0.3)" />
      <feComposite in2="offsetblur" operator="in" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <circle cx="50" cy="50" r="45" fill="rgba(255, 255, 255, 0.9)" />
  <path d="M50 20 L60 40 L80 45 L65 60 L70 80 L50 70 L30 80 L35 60 L20 45 L40 40 Z" 
        fill="url(#starGradient)" 
        filter="url(#starShadow)" />
  <path d="M35 55 Q50 75 65 55" stroke="black" strokeWidth="3" fill="none" />
  <circle cx="42" cy="45" r="4" fill="black" />
  <circle cx="58" cy="45" r="4" fill="black" />
</svg>
      <h4 className='reviews-h' style={{fontWeight: 500}}>{t("testimonials")}</h4>
      </div>
      
      <div className='div-grid'>
      <Flex className='reviews-flex' justifyContent="space-between" alignItems="center" width="100%" mb={4}>
        <Box >
      <Select variant='unstyled' className='dropdown' size='lg' h={35} onChange={handlePerPageChange} value={reviewsPerPage} icon={<></>}>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </Select>
      </Box>
      <ReviewFormModal onSubmit={handleReviewSubmit} />
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {currentReviews.map((review) => (
          <Box className='review-box'
            key={review.id}
            p={6}
            shadow="md"
            background="rgba(255, 255, 255, 0.9)"
            borderRadius="md"
            
          >
            <Flex direction="row" align="stretch" >

              <Flex direction="column" flex="1" alignItems="center" justifyContent="center" >

                <Heading as="h5" size="sm" mb={2} p={10}>
                  {review.name}
                </Heading>

                <Flex className="star-icon" align="center" mb={2} p={8} color={'#FFD700'}>
                  {Array.from({ length: review.rating }, (_, i) => (
                    <StarIcon key={i} color="yellow.400" />
                  ))}
                </Flex>

                <Text className="time-p" p={10} fontSize="sm" color="gray.500">
                  {new Date(review.timestamp.seconds * 1000).toLocaleDateString('hu-HU')}
                </Text>
              </Flex>

              <div
              style={{
                width: '1px',
                backgroundColor: 'grey',
                margin: '15px 15px',
              }}
            />

              <Flex flex="2" direction="column"  justifyContent="center" >
                <Text className="reviews-text" whiteSpace="pre-wrap">{review.review}</Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      <Pagination 
          totalReviews={reviews.length} 
          reviewsPerPage={reviewsPerPage} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        />
      </div>
      <div className='button-container'>
      <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ri:arrow-left-double-fill' /></button>
      <button className='up-button' onClick={scrollToTop}><Icon className='up-button' icon='ri:arrow-up-double-fill'/></button>
      </div>   
      </BubbleBg>
  )
}