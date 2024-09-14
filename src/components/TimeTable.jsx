import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import '../styles/components/TimeTable.scss'
import Pricelist from './Pricelist'
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
    <>
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
        <p>Kezdő: Vízhez szoktatás, merülés, valamint a gyors-, hát-, és mellúszás lábtempóinak elsajátítása.</p>
        <p>Haladó: A gyors-, hát-, és mellúszás kartempóinak elsajátítása.</p>
        <p>Úszó edzés: Állóképesség növelése, technika csiszolása, és kisebb versenyekre való felkészítés.</p>
      </div>
      <Pricelist />

      <div className='button-container'>
      <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='guidance:right-arrow' /></button>
      <button className='up-button' onClick={scrollToTop}><Icon className='up-button' icon='guidance:up-arrow'/></button>
      </div>

    </>
  )
}