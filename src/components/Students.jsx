import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import podiumboy from '../assets/images/podiumboy.png'
import medalboy from '../assets/images/medalboy.jpg'
import medalgirl from '../assets/images/medalgirl.jpg'
import peterStudents from '../assets/images/peter-students.jpg'


export default function Students() {

  const student1Ref = useRef(null)
  const student2Ref = useRef(null)
  const peterStudentsRef = useRef(null)


  const student1InView = useInView(student1Ref, { once: true })
  const student2InView = useInView(student2Ref, { once: true })
  const peterStudentsInView = useInView(peterStudentsRef, { once: true })


  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div layoutId="nav-item">

<div className='student1'>
        <motion.img ref={peterStudentsRef}
          className='peter-students' src={peterStudents} alt='Picture of Peter and his students during competition'
          initial={{ maskImage: 'repeating-linear-gradient(90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={isLoaded && peterStudentsInView ? { maskImage: 'repeating-linear-gradient(90deg, black 0%, black 100%, transparent 100%, transparent 100%)' } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}

        />
        <div className='student-text'>
        <span >2022, December. Tanítványaim első versenye. <br/> 10 versenyszámban 5 arany- és 2 ezüstérem. </span>
        <p style={{marginTop: '20px'}}>Abigél, Aisa, Emília, Luca, <br />Bence, Hunor, Marci, Peti</p>
        </div>
        </div>
      <div className='student1'>
        <motion.img ref={student1Ref}
          className='horizontal-pic' src={podiumboy} alt='Picture of Peters student'
          initial={{ maskImage: 'repeating-linear-gradient(90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={isLoaded && student1InView ? { maskImage: 'repeating-linear-gradient(90deg, black 0%, black 100%, transparent 100%, transparent 100%)' } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}

        />
        <span className='student1-text'>
          <h5>Nemere Hunor Péter</h5>
          <p>Bronzérem</p>
          <p>50 m gyorsúszás</p>
          <p>Diákolimpia megyei döntő, 2023, I. korcsoport </p>
        </span>
        <motion.img ref={student1Ref}
          className='vertical-pic' src={medalboy} alt='Picture of Peter and his student, Peter'
          initial={{ maskImage: 'repeating-linear-gradient(-90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={isLoaded && student1InView ? { maskImage: 'repeating-linear-gradient(-90deg, black 0%, black 100%, transparent 100%, transparent 100%)' } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className='student2'>
        <motion.img ref={student2Ref}
          className='vertical-pic1' src={medalgirl} alt='Picture of Peter and his student, Luca'
          initial={{ maskImage: 'repeating-linear-gradient(90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={isLoaded && student2InView ? { maskImage: 'repeating-linear-gradient(90deg, black 0%, black 100%, transparent 100%, transparent 100%)' } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
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