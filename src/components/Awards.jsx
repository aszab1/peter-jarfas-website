import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, Tab } from 'react-bootstrap'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FiChevronDown } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import peterswim from '../assets/images/peter-swim.jpeg'
import Teacher from './Teacher'
import Students from './Students'
import BubbleBg from './BubbleBg'




export default function Awards() {

  const { t } = useTranslation()

  const [activeTab, setActiveTab] = useState(null)
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

  const handleTabSelect = (k) => {
    if (activeTab === k) {
      setActiveTab(null) // Deselect the tab if it's already active
    } else {
      setActiveTab(k) // Set the active tab to the selected tab
    }
  }




  return (
    <BubbleBg>

        <motion.img
          className="swim-comp"
          src={peterswim}
          alt="peter during competition"
          initial={{ maskImage: 'repeating-linear-gradient(-0deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={{ maskImage: 'repeating-linear-gradient(-90deg, black 0%, black 100%, transparent 100%, transparent 100%)' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      <div className="text-center podium-container" >
        <div className='tabs-container'>
        <Icon className='trophy' icon='game-icons:trophy-cup'></Icon>
        <h4 className='achievements-text' >{t("achievements")}</h4>
        <Tabs
          id="awards-tabs"
          activeKey={activeTab}
          onSelect={handleTabSelect}
          className="mt-6"
          variant='none'
          justify
          
        >
          <Tab eventKey="teacher" title={<span>{t("master")} <FiChevronDown style={{ strokeWidth: 2, opacity: 0.9 }} /></span>}>
            <AnimatePresence>
              {activeTab === 'teacher' && (
                <motion.div
                  initial={{ x: '-100vw', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '100vw', opacity: 0 }}
                  transition={{ type: 'tween', ease: 'anticipate', duration: 1 }}
                >
                  <Teacher />
                </motion.div>
              )}
            </AnimatePresence>
          </Tab>
          <Tab eventKey="students" title={<span>{t("students")} <FiChevronDown style={{ strokeWidth: 2, opacity: 0.9 }} /></span>}>
            <AnimatePresence>
              {activeTab === 'students' && (
                <motion.div
                  initial={{ x: '-100vw', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '100vw', opacity: 0 }}
                  transition={{ type: 'tween', ease: 'anticipate', duration: 1 }}
                >
                  <Students />
                </motion.div>
              )}
            </AnimatePresence>

          </Tab>
        </Tabs>
        </div>
        </div>
      <div className='button-container'>
        <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ri:arrow-left-double-fill' /></button>
        <button className='up-button' onClick={scrollToTop}><Icon className='up-button' icon='ri:arrow-up-double-fill' /></button>
      </div>
    </BubbleBg>
  )
}
