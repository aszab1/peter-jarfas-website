import YouTubeVideoCard from './YouTubeVideoCard'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Box, Text } from '@chakra-ui/react'
import BubbleBg from './BubbleBg'


export default function Videos() {

  const { t } = useTranslation()

  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <BubbleBg>
      
      <Box className='yTvid-div' mt="7em" mb="5em" display="flex" flexDirection="column" alignItems="center">
      <YouTubeVideoCard
        videoSrc="https://www.youtube.com/embed/1YKE_UDI0fg"
        videoTitle={t("video1")}
      />

      <YouTubeVideoCard
        videoSrc="https://www.youtube.com/embed/7uQzytVWTCY"
        videoTitle={t("video2")}
      />
      <YouTubeVideoCard
        videoSrc="https://www.youtube.com/embed/JcOPP5TXlK8"
        videoTitle={t("video3")}
      />
      {/* <YouTubeVideoCard
        videoSrc="https://www.youtube.com/embed/VideoID"
        videoTitle="xy"
      /> */}

<Text
          className="video-p"
          textAlign="center" 
          fontWeight="500"
          fontSize="18px"
          fontFamily="'Lora', serif"
        >
          {t('moreVideos')}
        </Text>    
      </Box>
      <div className='button-container'>
      <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ri:arrow-left-double-fill' /></button>
      <button className='up-button' onClick={scrollToTop}><Icon className='up-button' icon='ri:arrow-up-double-fill'/></button>
      </div>  
    </BubbleBg>

  )
}




