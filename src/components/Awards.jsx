import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tabs, Tab } from 'react-bootstrap'

import peterswim from '../assets/images/peter-swim.jpeg'
import Teacher from './Teacher'
import Students from './Students'


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`


function Image({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  return (
    <motion.div
      initial={false}
      animate={
        isLoaded && isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      <img 
        src={src} 
        alt={alt} 
        onLoad={() => setIsLoaded(true)} 
        className="swim-comp"
      />
    </motion.div>
  )
}

export default function Awards() {
  const [activeTab, setActiveTab] = useState(null)
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
  }

  const handleTabSelect = (index) => {
    if (activeTab === index) {
      setActiveTab(null) // Deselect the tab if it's already active
    } else {
      setActiveTab(index) // Set the active tab to the selected tab
    }
  }



  return (
    <>
      <div className="text-center py-5">
        <Image src={peterswim} alt="peter during competition" />

        <Tabs
          id="awards-tabs"
          activeKey={activeTab}
          onSelect={handleTabSelect}
          className="mt-4"
        >
          <Tab eventKey="teacher" title="Mester">
            {activeTab === 'teacher' && <Teacher />}
          </Tab>
          <Tab eventKey="students" title="Tanítványai">
            {activeTab === 'students' && <Students />}
          </Tab>
        </Tabs>
      </div>
      <button className="back-button" onClick={handleBackClick}>Vissza</button>
    </>
  )
}
