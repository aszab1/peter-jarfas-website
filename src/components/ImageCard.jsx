import PropTypes from 'prop-types'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardBody, Image, Stack, Text } from '@chakra-ui/react'

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
}


export default function ImageCard({ imageSrc, altText, title, description, objectFit = "cover" }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={imageVariants}
    >
      <Card
        maxW="100%"
        // bg="#badfff"
        bg="#c4e4ff"
        boxShadow="md"
        p={15}
        overflow="hidden"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"

      >
        <CardBody p={0}>
          <Image
            className='card-pic'
            src={imageSrc}
            alt={altText}
            objectFit={objectFit}
            w="100%"
            h="300px"
            borderRadius={4}
          />
          <Stack p={3} spacing={2}>
            <Text fontWeight="bold" fontSize="lg">{title}</Text>
            <Text fontSize="sm" color="gray.600">{description}</Text>
          </Stack>
        </CardBody>
      </Card>
    </motion.div>
  )
}


ImageCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  objectFit: PropTypes.oneOf(['cover', 'contain']),
}

