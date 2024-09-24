import { useEffect, useState, lazy, Suspense } from 'react'
import logo from '../assets/images/logo.png'
import { Icon } from '@iconify/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import About from './About'


export default function Home() {

  const { t } = useTranslation()
  const [isFlipped, setIsFlipped] = useState(false)
  const [hoveredIcon, setHoveredIcon] = useState(null)


  const handleLogoClick = () => {
    setIsFlipped(true)
  }

  const handleAboutClick = () => {
    setIsFlipped(false)
  }

  

  useEffect(() => {

    const flipHappened = sessionStorage.getItem('hasFlippedOnce')

  if (!flipHappened) {
    const timer = setTimeout(() => {
      setIsFlipped(true)
      sessionStorage.setItem('hasFlippedOnce', true)
    }, 2200)

    return () => clearTimeout(timer)
  }
  }, [])

  

  // Handle touch events for mobile to mimic hover
  const handleTouchStart = (iconName) => {
    setHoveredIcon(iconName) // Treat touch as hover
  }

  const handleTouchEnd = () => {
    setHoveredIcon(null) // Reset when touch ends
  }

  const handleMouseEnter = (iconName) => {
    setHoveredIcon(iconName) // Trigger hover effect
  }

  const handleMouseLeave = () => {
    setHoveredIcon(null) // Reset on hover leave
  }

  

  return (
    <div className='home-container'>
      <div className='star-container'>
        <div className='content-container'>
        <motion.div
            className='photo-div'
            onMouseEnter={() => handleMouseEnter('photo')}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart('photo')}
            onTouchEnd={handleTouchEnd}
            initial={{ scale: 1, x: '-50%' }}
            animate={hoveredIcon === 'photo' ? { scale: 1.1, x: '-50%' } : { scale: 1, x: '-50%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
          <RouterLink to="/kepek" style={{ textDecoration: 'none' }}>
          {hoveredIcon === 'photo' ? (
                <p className="hover-text">{t("photos")}</p>
              ) : (
                <Icon className='photo-icon' icon='fa-solid:camera-retro' />
              )}
            </RouterLink>
          </motion.div>

        <div className='logo-container' >
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
        <motion.div
            className='video-div'
            onMouseEnter={() => handleMouseEnter('video')}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart('video')}
            onTouchEnd={handleTouchEnd}
            initial={{ scale: 1 }}
            animate={hoveredIcon === 'video' ? { scale: 1.1 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <RouterLink to="/videok" style={{ textDecoration: 'none' }}>
              {hoveredIcon === 'video' ? (
                <p className="hover-text">{t("videos")}</p>
              ) : (
                <Icon className='video-icon' icon='hugeicons:camera-video' />
              )}
            </RouterLink>
          </motion.div>

          <motion.div
            className='awards-div'
            onMouseEnter={() => handleMouseEnter('awards')}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart('awards')}
            onTouchEnd={handleTouchEnd}
            initial={{ scale: 1 }}
            animate={hoveredIcon === 'awards' ? { scale: 1.1 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <RouterLink to="/eredmenyek" style={{ textDecoration: 'none' }}>
              {hoveredIcon === 'awards' ? (
                <p className="hover-text">{t("awards")}</p>
              ) : (
                <Icon className='awards-logo' icon='game-icons:trophy-cup' />
              )}
            </RouterLink>
          </motion.div>

          <motion.div
            className='classes-div'
            onMouseEnter={() => handleMouseEnter('classes')}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart('classes')}
            onTouchEnd={handleTouchEnd}
            initial={{ scale: 1 }}
            animate={hoveredIcon === 'classes' ? { scale: 1.1 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <RouterLink to='/orarend-arak' style={{ textDecoration: 'none' }}>
              {hoveredIcon === 'classes' ? (
                <p className="hover-text">{t("timetableDiv")}</p>
              ) : (
                <Icon className='schedule-logo' icon='grommet-icons:schedules' />
              )}
            </RouterLink>
          </motion.div>

          <motion.div
            className='reviews-div'
            onMouseEnter={() => handleMouseEnter('reviews')}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart('reviews')}
            onTouchEnd={handleTouchEnd}
            initial={{ scale: 1 }}
            animate={hoveredIcon === 'reviews' ? { scale: 1.1 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <RouterLink to='/velemenyek' style={{ textDecoration: 'none' }}>
              {hoveredIcon === 'reviews' ? (
                <p className="hover-text">{t("reviews")}</p>
              ) : (
                <Icon className='comments-logo' icon='majesticons:comment-text-line' />
              )}
            </RouterLink>
          </motion.div>
      </div>
      </div>
      </div>
      
  )
}
