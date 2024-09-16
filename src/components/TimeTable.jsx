import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import '../styles/components/TimeTable.scss'
import Pricelist from './Pricelist'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box} from '@chakra-ui/react'
import BubbleBg from './BubbleBg'

import grouppic2 from '../assets/images/grouppic2.jpg'

export default function Classes() {

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


  const timeTableData = {
    HÉTFŐ: [
      { time: '17:15 - 18:00', class: 'Kezdő Kismedence' },
      { time: '18:00 - 18:45', class: 'Haladó Kismedence' },
    ],
    KEDD: [
      { time: '17:50 - 18:35', class: 'Nagymedencés' },
      { time: '18:35 - 19:45', class: 'Úszó Edzés'},
    ],
    SZERDA: [
      { time: '17:15 - 18:00', class: 'Kezdő Kismedence' },
      { time: '18:00 - 18:45', class: 'Haladó Kismedence' },
    ],
    CSÜTÖRTÖK: [
      { time: '17:50 - 18:35', class: 'Nagymedencés' },
      { time: '18:35 - 19:45', class: 'Úszó Edzés'},
    ],
    PÉNTEK: [
      { time: '14:00 - 14:45', class: 'Kezdő Kisvizes' },
      { time: '17:15 - 18:00', class: 'Haladó'},
    ],
    SZOMBAT: [
      { time: '10 - 10:45', class: 'Úszó Edzés' },
      { time: '11 - 11:45', class: 'Kezdő' },
      { time: '12 - 12:45', class: 'Haladó Kisvizes' },

    ],
  }


  const daysOfWeek = ['HÉTFŐ', 'KEDD', 'SZERDA', 'CSÜTÖRTÖK', 'PÉNTEK', 'SZOMBAT']
  return (
    <BubbleBg>
    <img className='students-in-pool' src={grouppic2} alt="Picture of Peter and his students in the pool" />
      <h2 className='timetable-h'>Órarend</h2>
      <div className="timetable">
        {daysOfWeek.map(day => (
          <div key={day} className="day-column">
            <div className="header-item">{day}</div>
            {timeTableData[day].map((item, index) => (
              <div key={index} className="class-item">
                <span className="time">{item.time}</span>
                <span className="class-name">{item.class}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <Box width="65%" margin="0 auto" >
      <Accordion defaultIndex={[]} allowMultiple>
  <AccordionItem borderBottom="1px solid" borderColor="black">
  <p className='accordion-title'>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left' >
        Kezdő Kismedence
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </p>
    <AccordionPanel pb={4} marginBottom={"1em"}>
    Vízhez szoktatás, merülés, valamint a gyors-, hát-, és mellúszás lábtempóinak elsajátítása.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem borderBottom="1px solid" borderColor="black">
    <p className='accordion-title'>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        Haladó
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </p>
    <AccordionPanel pb={4} marginBottom={"1em"}>
    A gyors-, hát-, és mellúszás kartempóinak elsajátítása.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
  <p className='accordion-title'>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        Úszó edzés
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </p>
    <AccordionPanel pb={4} marginBottom={"1em"}>
    Állóképesség növelése, technika csiszolása, és kisebb versenyekre való felkészítés.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</Box>
      </div>
      <Pricelist />

      <div className='button-container'>
      <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ri:arrow-left-double-fill' /></button>
      <button className='up-button' onClick={scrollToTop}><Icon className='up-button' icon='ri:arrow-up-double-fill'/></button>
      </div>  

    </BubbleBg>
  )
}