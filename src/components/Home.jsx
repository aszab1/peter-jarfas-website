import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import { Icon } from '@iconify/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
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
    }, 3000)

    return () => clearTimeout(timer)
  }
  }, [])

  
  const photoScaleAnimation = useSpring({
    transform: hoveredIcon === 'photo' ? 'translateX(-50%) scale(1.1)' : 'translateX(-50%) scale(1)',
    config: { tension: 300, friction: 10 },
  })

  const scaleAnimation = useSpring({
    scale: hoveredIcon && hoveredIcon !== 'photo' ? 1.1 : 1,
    config: { tension: 200, friction: 20 },
  })

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
        <animated.div
            className='photo-div'
            onMouseEnter={() => handleMouseEnter('photo')}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart('photo')}
            onTouchEnd={handleTouchEnd}
            style={photoScaleAnimation}
          >
          <RouterLink to="/kepek" style={{ textDecoration: 'none' }}>
          {hoveredIcon === 'photo' ? (
                <p className="hover-text">{t("photos")}</p>
              ) : (
                <Icon className='photo-icon' icon='fa-solid:camera-retro' />
              )}
            </RouterLink>
          </animated.div>

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
        <animated.div
            className='video-div'
            onMouseEnter={() => handleMouseEnter('video')}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart('video')}
            onTouchEnd={handleTouchEnd}
            style={hoveredIcon === 'video' ? scaleAnimation : {}}
          >
            <RouterLink to="/videok" style={{ textDecoration: 'none' }}>
              {hoveredIcon === 'video' ? (
                <p className="hover-text">{t("videos")}</p>
              ) : (
                <Icon className='video-icon' icon='hugeicons:camera-video' />
              )}
            </RouterLink>
          </animated.div>

          <animated.div
            className='awards-div'
            onMouseEnter={() => handleMouseEnter('awards')}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart('awards')}
            onTouchEnd={handleTouchEnd}
            style={hoveredIcon === 'awards' ? scaleAnimation : {}}
          >
            <RouterLink to="/eredmenyek" style={{ textDecoration: 'none' }}>
              {hoveredIcon === 'awards' ? (
                <p className="hover-text">{t("awards")}</p>
              ) : (
                <Icon className='awards-logo' icon='game-icons:trophy-cup' />
              )}
            </RouterLink>
          </animated.div>

          <animated.div
            className='classes-div'
            onMouseEnter={() => handleMouseEnter('classes')}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart('classes')}
            onTouchEnd={handleTouchEnd}
            style={hoveredIcon === 'classes' ? scaleAnimation : {}}
          >
            <RouterLink to='/orarend-arak' style={{ textDecoration: 'none' }}>
              {hoveredIcon === 'classes' ? (
                <p className="hover-text">{t("timetableDiv")}</p>
              ) : (
                <Icon className='schedule-logo' icon='grommet-icons:schedules' />
              )}
            </RouterLink>
          </animated.div>

          <animated.div
            className='reviews-div'
            onMouseEnter={() => handleMouseEnter('reviews')}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleTouchStart('reviews')}
            onTouchEnd={handleTouchEnd}
            style={hoveredIcon === 'reviews' ? scaleAnimation : {}}
          >
            <RouterLink to='/velemenyek' style={{ textDecoration: 'none' }}>
              {hoveredIcon === 'reviews' ? (
                <p className="hover-text">{t("reviews")}</p>
              ) : (
                <Icon className='comments-logo' icon='majesticons:comment-text-line' />
              )}
            </RouterLink>
          </animated.div>
      </div>
      </div>
      </div>
      
  )
}
