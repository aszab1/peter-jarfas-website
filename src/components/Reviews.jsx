import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import ReviewFormModal from './ReviewFormModal'
import { db } from '../utils/fireBaseConfig.js'
import { collection, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore'
import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'



export default function Reviews() {

  const { t } = useTranslation()

  const navigate = useNavigate()
  const [reviews, setReviews] = useState([])


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
        setError('email', 'A review has already been submitted with this email address.')
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
      setError('submit', 'Failed to submit the review. Please try again.')
    }
  }



  return (
    <>
      <h3 className='reviews-h'>{t("testimonials")}</h3>
      <ReviewFormModal onSubmit={handleReviewSubmit} />
      <div className='div-grid'>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {reviews.map((review) => (
          <Box className='review-box'
            key={review.id}
            p={25}
            shadow="md"
            // borderWidth="20px"
            background="white"
            borderRadius="md"
            // m={30}
          >
            <Flex direction="row" align="stretch" >

              <Flex direction="column" flex="1" alignItems="center" justifyContent="center" >

                <Heading as="h5" size="sm" mb={2} p={10}>
                  {review.name}
                </Heading>

                <Flex align="center" mb={2} p={10} color={'gold'}>
                  {Array.from({ length: review.rating }, (_, i) => (
                    <StarIcon key={i} color="yellow.400" />
                  ))}
                </Flex>

                <Text p={10} fontSize="sm" color="gray.500">
                  {new Date(review.timestamp.seconds * 1000).toLocaleDateString()}
                </Text>
              </Flex>

              <div
              style={{
                width: '1.5px',
                backgroundColor: 'grey',
                margin: '0 1px',
              }}
            />

              <Flex flex="2" direction="column"  justifyContent="center" >
                <Text>{review.review}</Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      </div>
      <div className='button-container'>
      <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='guidance:right-arrow' /></button>
      <button className='up-button' onClick={scrollToTop}><Icon className='up-button' icon='guidance:up-arrow'/></button>
      </div>   
    </>
  )
}