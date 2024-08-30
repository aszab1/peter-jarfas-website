import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Modal, ModalOverlay, ModalContent, useDisclosure, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { ChakraProvider, Box, FormControl, FormHelperText, FormErrorMessage, FormLabel, Input, Textarea, Stack, HStack, IconButton } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'



export default function Reviews() {

  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef(null)

  const [rating, setRating] = useState(0)

  const handleBackClick = () => {
    navigate('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onClose() // Close the modal
    finalRef.current?.focus() // Set focus back to the Save Reviews section
  }

  return (
    <>
      <h2>Vélemények</h2>
      <ChakraProvider>
        <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
        </Box>
        <button className='slide-button' 
        onClick={onOpen}
        style={{
          outline: 'none !important',
          boxShadow: 'none !important',
          _focus: { outline: 'none !important', boxShadow: 'none !important' },
          _focusVisible: { outline: 'none !important', boxShadow: 'none !important' },
          _active: { outline: 'none !important', boxShadow: 'none !important' },
        }}
        >
          Leave a Review
        </button>
        <Modal size={'lg'} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay bg='none'
            backdropFilter='auto'
            backdropInvert='60%'
            backdropBlur='2px' />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>

              <Box maxWidth="500px" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
                <form onSubmit={handleSubmit}>
                  <Stack spacing={6}>
                    <FormControl id="name" isRequired>
                      <FormLabel>Név</FormLabel>
                      <Input type="text" placeholder="Enter your name" />
                    </FormControl>

                    <FormControl id="email" isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" placeholder="Enter your email" />
                      <FormHelperText>We will never share your email.</FormHelperText>
                    </FormControl>

                    <FormControl id="rating" isRequired>
                      <FormLabel>How many stars?</FormLabel>
                      <HStack>
                        {[...Array(5)].map((_, i) => (
                          <IconButton
                            key={i}
                            icon={<StarIcon />}
                            variant={i < rating ? "solid" : "outline"}
                            colorScheme="yellow"
                            onClick={() => setRating(i + 1)}
                            aria-label={`Rate ${i + 1} stars`}
                          />
                        ))}
                      </HStack>
                    </FormControl>

                    <FormControl id="review" isRequired>
                      <FormLabel>Your Review</FormLabel>
                      <Textarea h='200px' placeholder="Write your review here..." />
                      {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
                    </FormControl>

                    <button className='slide-button' type="submit">
                      Submit
                    </button>
                  </Stack>
                </form>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
      <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ep:back' /></button>
    </>

  )
}