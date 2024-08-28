import YouTubeVideoCard from './YouTubeVideoCard'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Videos(){

  const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}

    return (
    <div>

      <YouTubeVideoCard 
        videoSrc="https://www.youtube.com/embed/1YKE_UDI0fg" 
        videoTitle="First Video"
      />
      
      <YouTubeVideoCard 
        videoSrc="https://www.youtube.com/embed/7uQzytVWTCY" 
        videoTitle="Second Video"
      />
      <YouTubeVideoCard 
        videoSrc="https://www.youtube.com/embed/VideoID" 
        videoTitle="xy"
      />
      <YouTubeVideoCard 
        videoSrc="https://www.youtube.com/embed/VideoID" 
        videoTitle="xy"
      />
    
    <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ep:back' /></button>
    </div>
    
  )
}




