import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tabs, Tab } from 'react-bootstrap'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FiChevronDown } from 'react-icons/fi'

import peterswim from '../assets/images/peter-swim.jpeg'
import Teacher from './Teacher'
import Students from './Students'



export default function Awards() {
  const [activeTab, setActiveTab] = useState(null)
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
  }

  const handleTabSelect = (k) => {
    if (activeTab === k) {
      setActiveTab(null) // Deselect the tab if it's already active
    } else {
      setActiveTab(k) // Set the active tab to the selected tab
    }
  }

  


  return (
    <>
      <div className="text-center py-5" style={{ backgroundColor: '#B97129'}}>
      <motion.img
className="swim-comp"
src={peterswim}
alt="peter during competition"
initial={{ maskImage: 'repeating-linear-gradient(-0deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
animate={{ maskImage: 'repeating-linear-gradient(-90deg, black 0%, black 100%, transparent 100%, transparent 100%)' }}
transition={{ duration: 1.5, ease: 'easeInOut' }}
/>

        <Tabs
          id="awards-tabs"
          activeKey={activeTab}
          onSelect={handleTabSelect}
          className="mt-6"
          variant='none'
        
          justify
        >
          <Tab eventKey="teacher" title={<span>Mester <FiChevronDown style={{ strokeWidth: 2, opacity: 0.9 }} /></span>}>
            {activeTab === "teacher" && <Teacher />}
          </Tab>
          <Tab eventKey="students" title={<span>Tanítványai <FiChevronDown style={{ strokeWidth: 2, opacity: 0.9 }}/></span>}>
            {activeTab === "students" && <Students />}
          </Tab>
        </Tabs>
      </div>
      <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ep:back' /></button>
    </>
  )
}
