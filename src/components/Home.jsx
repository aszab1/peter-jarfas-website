import { useState } from 'react'
import logo from '../assets/images/logo.png'
import { Icon } from '@iconify/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import About from './About'



export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleLogoClick = () => {
    setIsFlipped(true)
  }

  const handleAboutClick = () => {
    setIsFlipped(false)
  }

  return (
    <div className='home-container'>
      <div className='star-container'>
        <div className='content-container'>
        <div className='photo-div'>
          <RouterLink to="/kepek">
            <Icon className='photo-icon' icon='fa-solid:camera-retro'></Icon>
          </RouterLink>
        </div>
        <div className='logo-container'>
          <AnimatePresence mode='wait'>
            {!isFlipped && (
              <motion.img
                onClick={handleLogoClick}
                className='logo'
                src={logo}
                alt={`A logo of Peter's initials and the sea`}
                initial={{ rotateY: 90 }}
                animate={{ rotateY: 0 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut', opacity: 0 }}
                key="front"
              />
            )}
            {isFlipped && (
              <motion.div
                className='about-me'
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90 }}
                transition={{ duration: 0.8, ease: 'easeIn',  opacity: 0 }}
                key="back"
                onClick={handleAboutClick}
              >
                <About />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className='video-div'>
          <RouterLink to="/videok">
            <Icon className='video-icon' icon='hugeicons:camera-video' />
          </RouterLink>
        </div>
        <div className='awards-div'>
          <RouterLink to="/eredmenyek">
            <Icon className='awards-logo' icon='game-icons:trophy-cup'></Icon>
          </RouterLink>
        </div>
        <div className='classes-div'>
          <RouterLink to='/orarend-arak'>
            <Icon className='schedule-logo' icon='grommet-icons:schedules'></Icon>
          </RouterLink>
        </div>
        <div className='reviews-div'>
          <RouterLink to='/velemenyek'>
            <Icon className='comments-logo' icon='majesticons:comment-text-line'></Icon>
          </RouterLink>
        </div>
      </div>
      </div>
      </div>
      
  )
}
