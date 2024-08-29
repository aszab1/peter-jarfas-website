import { useRef } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

export default function YouTubeVideoCard({ videoSrc, videoTitle }) {

  const iframeRef = useRef(null)

  return (
    <Card className='video-card' style={{ backgroundColor: 'lightyellow'}} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box className='text-box' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: '1 1 40%' }}> 

        <Typography component="div" variant="h6" sx={{ p: 2, whiteSpace: 'pre-line', textAlign: 'center'  }}>
          {videoTitle} 
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>

        </Box>
      </Box>
      {/* YouTube Video Embed */}
      <Box className='youtube' sx={{ flex: '2 1 60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe
          ref={iframeRef}
          width="300"
          height="170"
          src={`${videoSrc}?enablejsapi=1`}
          title={videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </Card>
  )
}


