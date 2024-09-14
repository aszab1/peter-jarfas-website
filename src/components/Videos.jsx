import YouTubeVideoCard from './YouTubeVideoCard'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react/dist/iconify.js'


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
    <div>

      <YouTubeVideoCard
        videoSrc="https://www.youtube.com/embed/1YKE_UDI0fg"
        videoTitle={t("video1")}
      />

      <YouTubeVideoCard
        videoSrc="https://www.youtube.com/embed/7uQzytVWTCY"
        videoTitle={t("video2")}
      />
      <YouTubeVideoCard
        videoSrc="https://www.youtube.com/embed/VideoID"
        videoTitle="xy"
      />
      <YouTubeVideoCard
        videoSrc="https://www.youtube.com/embed/VideoID"
        videoTitle="xy"
      />

      <div className='button-container'>
        <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='guidance:right-arrow' /></button>
        <button className='up-button' onClick={scrollToTop}><Icon className='up-button' icon='guidance:up-arrow' /></button>
      </div>
    </div>

  )
}




