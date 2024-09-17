import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import '../styles/components/TimeTable.scss'
import Pricelist from './Pricelist'
import { useTranslation } from 'react-i18next'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react'
import BubbleBg from './BubbleBg'

import grouppic2 from '../assets/images/grouppic2.jpg'

export default function Classes() {

  const { t } = useTranslation()

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
    [t("monday")]: [
      { time: '17:15 - 18:00', class: t("beginner") },
      { time: '18:10 - 18:55', class: t("advanced") },
      { time: '19:00 - 19:45', class: t("swimmer") },
    ],
    [t("tuesday")]: [
      { time: '17:50 - 18:35', class: t("swimmer") },
      { time: '18:35 - 19:20', class: t("training") },
    ],
    [t("wednesday")]: [
      { time: '17:15 - 18:00', class: t("advanced") },
      { time: '18:15 - 19:00', class: t("swimmer") },
    ],
    [t("thursday")]: [
      { time: '17:50 - 18:35', class: t("swimmer") },
      { time: '18:35 - 19:20', class: t("training") },
    ],
    [t("friday")]: [
      { time: '16:00 - 16:45', class: t("beginner") },
      { time: '17:15 - 18:00', class: t("advanced") },
    ],
    [t("saturday")]: [
      { time: '10:05 - 10:50', class: t("training") },
      { time: '11:00 - 11:45', class: t("beginner") },
      { time: '12:00 - 12:45', class: t("advanced") },
      { time: '13:00 - 13:45', class: t("swimmer") },

    ],
  }


  const daysOfWeek = [t("monday"), t("tuesday"), t("wednesday"), t("thursday"), t("friday"), t("saturday")]
  return (
    <BubbleBg>
      <img className='students-in-pool' src={grouppic2} alt="Picture of Peter and his students in the pool" />
      <h2 className='timetable-h'>{t("timetable")}</h2>
      <div className="timetable">
        {daysOfWeek.map(day => (
          <div key={day} className="day-column">
            <div className="header-item">{day}</div>
            {timeTableData[day]?.map((item, index) => (
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
            <AccordionItem borderBottom="2px solid" borderColor="black">
              <p className='accordion-title'>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left' style={{color: 'black'}}>
                    {t("beginner")}
                  </Box>
                  <AccordionIcon style={{color: 'black'}} />
                </AccordionButton>
              </p>
              <AccordionPanel pb={4} marginBottom={"1em"}>
                {t("beginnerContent")} <br /> {t("beginnerContent1")} <br /> {t("beginnerContent2")} <br /> {t("beginnerContent3")}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderBottom="2px solid" borderColor="black">
              <p className='accordion-title'>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left' style={{color: 'black'}}>
                    {t("advanced")}
                  </Box>
                  <AccordionIcon style={{color: 'black'}} />
                </AccordionButton>
              </p>
              <AccordionPanel pb={4} marginBottom={"1em"}>
                {t("advancedContent")} <br /> {t("advancedContent1")} <br /> {t("advancedContent2")} <br /> {t("advancedContent3")}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem borderBottom="2px solid" borderColor="black">
              <p className='accordion-title'>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left' style={{color: 'black'}}>
                    {t("swimmer")}
                  </Box>
                  <AccordionIcon style={{color: 'black'}}/>
                </AccordionButton>
              </p>
              <AccordionPanel pb={4} marginBottom={"1em"}>
                {t("swimmerContent")} <br /> {t("swimmerContent1")} <br /> {t("swimmerContent2")}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <p className='accordion-title'>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left' style={{color: 'black'}}>
                    {t("training")}
                  </Box>
                  <AccordionIcon style={{color: 'black'}}/>
                </AccordionButton>
              </p>
              <AccordionPanel pb={4} marginBottom={"1em"}>
                {t("trainingContent")} <br /> {t("trainingContent1")} <br /> {t("trainingContent2")}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </div>
      <Pricelist />

      <div className='button-container'>
        <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ri:arrow-left-double-fill' /></button>
        <button className='up-button' onClick={scrollToTop}><Icon className='up-button' icon='ri:arrow-up-double-fill' /></button>
      </div>

    </BubbleBg>
  )
}