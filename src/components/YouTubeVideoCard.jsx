import { useRef } from 'react'
import { Box, Flex, Heading} from '@chakra-ui/react'



export default function YouTubeVideoCard({ videoSrc, videoTitle }) {

  const iframeRef = useRef(null)

  return (
    <Box
      className="video-card"
      bg="rgba(255, 255, 255, 0.6)"
      boxShadow="md"
      borderRadius="md"
      width={{ base: '90%', md: '65%' }}
      height="auto"
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
      mb={8}
      p={4}
    >
      <Flex
        className="text-box"
        flex="1 1 40%"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        p={2}
      >
        <Heading as="h6" size="md" fontWeight="500" fontSize="18px" fontFamily="'Lora', serif" whiteSpace="pre-line">
          {videoTitle}
        </Heading>
      </Flex>
      {/* YouTube Video Embed */}
      <Flex
        className="youtube"
        flex="2 1 60%"
        justifyContent="center"
        alignItems="center"
      >
        <iframe
          className='yt-iframe'
          ref={iframeRef}
          width='100%'
          height='100%'
          src={`${videoSrc}?enablejsapi=1`}
          title={videoTitle}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '600px',
            maxHeight: '600px',
            aspectRatio: '16/9',
            margin: '20px'
          }}
        />
      </Flex>
    </Box>
  )
}


