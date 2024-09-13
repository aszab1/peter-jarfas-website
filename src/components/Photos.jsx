import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import pic1 from '../assets/images/cool-vibesgirl.jpg'
import pic2 from '../assets/images/ciaogirl.jpg'
import grouppic1 from '../assets/images/grouppic1.jpg'
import grouppic3 from '../assets/images/grouppic3.jpg'
import swimlesson from '../assets/images/uszasoktatas.jpg'
import negyen from '../assets/images/negyen.jpg'
import fejes from '../assets/images/fejes-ugras.jpeg'
import seniorGroupPic from '../assets/images/senior-group.jpg'


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`


export default function Photos() {

  const { t } = useTranslation()

  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
  }

  const swimLessonRef = useRef(null)
  const swimGroupPicRef = useRef(null)
  const swimGroupPic1Ref = useRef(null)
  const girlsRef = useRef(null)
  const diveRef = useRef(null)
  const negyenRef = useRef(null)
  const seniorsRef = useRef(null)



  const swimLessonInView = useInView(swimLessonRef, { once: true })
  const swimGroupPicInView = useInView(swimGroupPicRef, { once: true })
  const swimGroupPic1InView = useInView(swimGroupPicRef, { once: true })
  const girlsInView = useInView(girlsRef, { once: true })
  const diveInView = useInView(diveRef, { once: true })
  const negyenInView = useInView(negyenRef, { once: true })
  const seniorsInView = useInView(seniorsRef, { once: true })

  const [isLoaded, setIsLoaded] = useState(false)


  return (
    <>

      <div className='swim-div'>
      <p>{t("swimLesson")}</p>

        <motion.img ref={swimLessonRef}
          className='swim-lesson'
          src={swimlesson} alt="swim lesson"
          initial={false}
          animate={
            isLoaded && swimLessonInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.8)'}
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask, boxShadow: 'none',}
              
          }
          transition={{ duration: 1.5, delay: 0.2 }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: 'block', margin: 0, padding: 0, border: 'none' }} ><rect fill="#60a6f0" width="100%" height="100%" stroke="none" />
        <path d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z" fill="#82C4FF" stroke="none"></path>
      </svg>
      <div
        className='uszoda-div' style={{ backgroundColor: '#60a6f0' }}
      >
        <svg
          className='bubbles'
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 409.6 409.6"

        >
          <path d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0" fill="url(&quot;#SvgjsLinearGradient1042&quot;)"></path><defs><linearGradient id="SvgjsLinearGradient1042"><stop stopColor="#d5dee7" offset="0"></stop><stop stopColor="#ffffff" offset="1"></stop></linearGradient></defs></svg>

        <motion.img ref={swimGroupPicRef} className='uszoda' src={grouppic3} alt="in front of natatorium"
          initial={false}
          animate={
            isLoaded && swimGroupPicInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)} />
      </div>

      <div className='happykids-div' style={{ backgroundColor: '#60a6f0', position: 'relative'}}>
        <div className='group'>
          <motion.img ref={swimGroupPic1Ref} className='swim-group-pic' src={grouppic1} alt="swim lesson, group picture"
            initial={false}
            animate={
              isLoaded && swimGroupPic1InView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1.5, delay: 1.5 }}
            viewport={{ once: true }}
            onLoad={() => setIsLoaded(true)} />
            <p>{t("happyKids")}</p>
            <svg
          className='bubbles1'
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 409.6 409.6"
          transform="rotate(190)"

        >
          <path d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0" fill="url(&quot;#SvgjsLinearGradient1042&quot;)"></path><defs><linearGradient id="SvgjsLinearGradient1042"><stop stopColor="#d5dee7" offset="0"></stop><stop stopColor="#ffffff" offset="1"></stop></linearGradient></defs></svg>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ display: 'block', margin: 0, padding: 0, border: 'none' }}><rect fill="#4d9aeb" width="100%" height="100%" stroke="none" />
        <path d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z" fill='#60a6f0' stroke="none"></path>
      </svg>
      <div style={{backgroundColor: '#4d9aeb', stroke: 'none'}}>
      <div className='girls'>
        <motion.img ref={girlsRef} className='pic1' 
          src={pic1} alt="with one of the student"
          initial={false}
          animate={
            isLoaded && girlsInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
        <p>{t("girls")}</p>
        <motion.img ref={girlsRef} className='pic2' src={pic2} alt="with one of the student" 
        initial={false}
        animate={
          isLoaded && girlsInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1.5, delay: 1 }}
        viewport={{ once: true }}
        onLoad={() => setIsLoaded(true)}
        
        />

      </div>
      </div>
      <div style={{ backgroundColor: '#4d9aeb'}}>
      <div className='dive-div' style={{position: 'relative'}}>
      <svg
          className='bubbles2'
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 409.6 409.6"

        >
          <path d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0" fill="url(&quot;#SvgjsLinearGradient1042&quot;)"></path><defs><linearGradient id="SvgjsLinearGradient1042"><stop stopColor="#d5dee7" offset="0"></stop><stop stopColor="#ffffff" offset="1"></stop></linearGradient></defs></svg>
        <motion.img ref={diveRef}
          className='dive'
          src={fejes}
          alt="Peter diving during competition"
          initial={false}
          animate={
            isLoaded && diveInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"  style={{ display: 'block', margin: 0, padding: 0, border: 'none' }}><rect fill="#2384eb" width="100%" height="100%" stroke="none"/>
        <path d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z" fill="#4d9aeb" stroke="none"></path>
      </svg>
      
      <div className='senior-div' style={{ backgroundColor: '#2384eb' }}>
        <div className='group'>
        <p>{t("senior1")}</p>
        <motion.img ref={seniorsRef}
        className='senior-group' src={seniorGroupPic} alt="Peter with his swim team" 
        initial={false}
        animate={
          isLoaded && seniorsInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1.5, delay: 1 }}
        viewport={{ once: true }}
        onLoad={() => setIsLoaded(true)}
        />
        </div>
      </div>
      <div className='seniors' style={{ backgroundColor: '#2384eb', position: 'relative' }}>
        <div className='group1'>
        <motion.img ref={negyenRef}
        className='negyen' src={negyen} alt="Peter and his teammates during competition"
        initial={false}
        animate={
          isLoaded && negyenInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1.5, delay: 1 }}
        viewport={{ once: true }}
        onLoad={() => setIsLoaded(true)}
        />
        <p>{t("senior2")}</p>
        <svg
          className='bubbles3'
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 409.6 409.6"
          transform="rotate(190)"

        >
          <path d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0" fill="url(&quot;#SvgjsLinearGradient1042&quot;)"></path><defs><linearGradient id="SvgjsLinearGradient1042"><stop stopColor="#d5dee7" offset="0"></stop><stop stopColor="#ffffff" offset="1"></stop></linearGradient></defs></svg>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"  style={{ display: 'block', margin: 0, padding: 0, border: 'none' }}><rect fill="#2384eb" width="100%" height="1%" stroke="none"/>
        <path d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z" fill="#2384eb" stroke="none"></path>
      </svg>
      <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ep:back' /></button>

    </>

  )
}