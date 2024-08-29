import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { ChakraProvider, Box, FormControl, FormHelperText, FormErrorMessage, FormLabel, Input, Textarea, Button, Stack, HStack, IconButton } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export default function Reviews(){

  const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}

const [rating, setRating] = useState(0)

  return(
    <>
    <ChakraProvider>
      <Box maxWidth="500px" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <form>
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
              <Textarea placeholder="Write your review here..." />
              {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
            </FormControl>

            <Button mt={6} colorScheme="blue" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </ChakraProvider>
    
    <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ep:back' /></button>
    </>
  )
}