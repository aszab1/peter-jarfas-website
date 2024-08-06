import { useState, useEffect } from 'react'
import logo from '../assets/images/logo.png'
import { Icon } from '@iconify/react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'



export default function Home(){

  const [isFlipped, setIsFlipped] = useState(false)
  const navigate = useNavigate()

  const handleLogoClick = () => {
    setIsFlipped(true)
  }

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => {
        navigate('/rolam')
      }, 600) 
      return () => clearTimeout(timer)
    }
  }, [isFlipped, navigate])

  return(
    <>
    <div className='photo-div'>
        <RouterLink to="/kepek">
          <Icon className='photo-icon' icon='fa-solid:camera-retro'></Icon>
        </RouterLink>
      </div>
      <div className='logo-container' onClick={handleLogoClick}>
        <AnimatePresence>
          {!isFlipped && (
            <motion.img
              className='logo'
              src={logo}
              alt={`A logo of Peter's initials and the sea`}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{ duration: 0.6 }}
              key="front"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isFlipped && (
            <motion.div
              className='about-me'
              initial={{ rotateY: -180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              key="back"
            >
            <RouterLink to='/rolam'></RouterLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <RouterLink to="/videok">
        <Icon className='video-icon' icon='hugeicons:camera-video' />
      </RouterLink>
      <RouterLink to="/eredmenyek">
        <Icon className='awards-logo' icon='noto:trophy'></Icon>
      </RouterLink>
      <RouterLink to='/orarend-arak'>
        <Icon className='schedule-logo' icon='grommet-icons:schedules'></Icon>
      </RouterLink>
      <RouterLink to='/velemenyek'>
        <Icon className='comments-logo' icon='majesticons:comment-text-line'></Icon>
      </RouterLink>
      <p>Ez egy példa a magyar betűk használatára: Á, É, Í, Ó, Ö, Ő, Ú, Ü, Ű</p>
    
    </>

  )
}