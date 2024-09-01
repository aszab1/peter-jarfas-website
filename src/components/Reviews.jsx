import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import ReviewFormModal from './ReviewFormModal'
import { db } from '../utils/fireBaseConfig.js'
import { collection, addDoc, getDocs, query, where, orderBy } from 'firebase/firestore'
import { StarIcon } from '@chakra-ui/icons'


export default function Reviews() {

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
      <h2>Vélemények</h2>
      <ReviewFormModal onSubmit={handleReviewSubmit} />
      {reviews.map((review) => {
        // Format the timestamp to a readable date format (e.g., YYYY-MM-DD)
        const formattedDate = review.timestamp
          ? new Date(review.timestamp.seconds * 1000).toLocaleDateString()
          : 'Date not available';

        return (
          <div key={review.id}>
            <h4>{review.name}</h4>
            <p>{review.review}</p>
            <div>
              {Array.from({ length: review.rating }, (_, i) => (
                <StarIcon key={i} color="yellow.400" />
              ))}
            </div>
            <p>{formattedDate}</p>
            </div>
        )
})}
      <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ep:back' /></button>
    </>

  )
}