import { useState, useRef, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  HStack,
  IconButton,
  FormErrorMessage,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export default function ReviewFormModal({ onSubmit }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  //  onCloseComplete to the above
  const finalRef = useRef(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Function to reset form fields and errors
  const resetForm = () => {
    setName('')
    setEmail('')
    setRating(0)
    setReview('')
    setErrors({})
    setIsSubmitted(false) // Reset submission state
  }

  // Effect to handle modal closure after successful submission
  useEffect(() => {
    if (isSubmitted && !errors.email && !errors.submit) {
      onClose()
    }
  }, [isSubmitted, errors, onClose])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})  // Reset errors before submission

    // Call the onSubmit function with setError callback to handle errors
    await onSubmit({ name, email, rating, review }, (field, message) => {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: message }))
    })

    // Set the submission state to true to trigger modal close if successful
    setIsSubmitted(true)
  }

  return (
    <ChakraProvider>
      <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box"></Box>
      <button
        className="slide-button"
        onClick={onOpen}
        style={{
          outline: 'none !important',
          boxShadow: 'none !important',
        }}
      >
        Leave a Review
      </button>
      <Modal
        size={'lg'}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={resetForm} // Reset form state when modal closes completely
        isCentered
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="60%" backdropBlur="2px" />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box
              maxWidth="500px"
              mx="auto"
              mt={10}
              p={6}
              borderWidth={1}
              borderRadius="lg"
              boxShadow="lg"
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={6}>
                  <FormControl id="name" isRequired isInvalid={!!errors.name}>
                    <FormLabel>Név</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
                  </FormControl>

                  <FormControl id="email" isRequired isInvalid={!!errors.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                  </FormControl>

                  <FormControl id="rating" isRequired>
                    <FormLabel>How many stars?</FormLabel>
                    <HStack>
                      {[...Array(5)].map((_, i) => (
                        <IconButton
                          key={i}
                          icon={<StarIcon />}
                          variant={i < rating ? 'solid' : 'outline'}
                          colorScheme="yellow"
                          onClick={() => setRating(i + 1)}
                          aria-label={`Rate ${i + 1} stars`}
                        />
                      ))}
                    </HStack>
                  </FormControl>

                  <FormControl id="review" isRequired>
                    <FormLabel>Your Review</FormLabel>
                    <Textarea
                      h="200px"
                      placeholder="Write your review here..."
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                    />
                  </FormControl>

                  {errors.submit && <FormErrorMessage>{errors.submit}</FormErrorMessage>}

                  <button className="slide-button" type="submit">
                    Submit
                  </button>
                </Stack>
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}
