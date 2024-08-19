import { motion } from 'framer-motion'
import podiumboy from '../assets/images/podiumboy.png'
import medalboy from '../assets/images/medalboy.jpg'
import medalgirl from '../assets/images/medalgirl.jpg'

export default function Students() {
  return (
    <motion.div layoutId="nav-item">
      <div className='student1'>
        <img className='horizontal-pic' src={podiumboy} alt='' />
        <span className='student1-text'>
        <h5>Nemere Hunor Péter</h5>
        <p>Bronzérem</p>
        <p>50 m gyorsúszás</p>
        <p>Diákolimpia megyei döntő, 2023, I. korcsoport </p>
        </span>
        <img className='vertical-pic' src={medalboy} alt='' />
      </div>
      <div className='student2'>
        <img className='vertical-pic1' src={medalgirl} alt='' />
        <span>
        <h5>Kiss Luca</h5>
        <p>Diákolimpia területi bajnoka, 2023</p>
        <p>100 m gyorsúszás</p>
        <p>100 m hátúszás</p>
        </span>
      </div>
    </motion.div>
  )
}