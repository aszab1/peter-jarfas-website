import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

import medals from '../assets/images/medals.jpg'
import belgradpic from '../assets/images/belgrade-2024.jpeg'
import peterWithTeammates from '../assets/images/peter-and-teammates.jpg'
import peterSlovenia  from '../assets/images/peter-slovenia.jpg'
import peterDiplom from '../assets/images/peter-diplom.jpg'
import peterPetike from '../assets/images/peter-petike.jpeg'
import peterTorokbalint from '../assets/images/peter-torokbalint.jpg'
import peterTrophy from '../assets/images/peter-trophy.jpg'



export default function Teacher() {

  const medalRef = useRef(null)
  const szazhalombattaRef = useRef(null)
  const peterSloveniaRef = useRef(null)
  const peterGyulaRef = useRef(null)
  const peterTorokbalintRef = useRef(null)
  const peterKecskemetRef = useRef(null)
  const peterDiplomRef = useRef(null)
  const peterEBRef = useRef(null)



  const medalInView = useInView(medalRef, { once: true })
  const szazhalombattaInView = useInView(szazhalombattaRef, { once: true })
  const peterSloveniaInView = useInView(peterSloveniaRef, { once: true })
  const peterGyulaInView = useInView(peterGyulaRef, { once: true })
  const peterTorokbalintInView = useInView(peterTorokbalintRef, { once: true })
  const peterKecskemetInView = useInView(peterKecskemetRef, { once: true })
  const peterDiplomInView = useInView(peterDiplomRef, { once: true })
  const peterEBInView = useInView(peterEBRef, { once: true })



  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div layoutId="nav-item">
      <div className='medal'>
        <motion.img ref={medalRef}
          className='medals' src={medals} alt='Picture of Peters medals from 2018'
          initial={{ maskImage: 'repeating-linear-gradient(90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={isLoaded && medalInView ? { maskImage: 'repeating-linear-gradient(90deg, black 0%, black 100%, transparent 100%, transparent 100%)' } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
        <span>
        2018-as eredményeim: 42 versenyszámban indultam, 36 érmet szereztem, ebből 25 arany, 8 ezüst és 3 bronz
        </span>
      </div>
      <div className='szazhalombatta'>
        <motion.img ref={szazhalombattaRef}
          className='szazhalombatta-pic' src={peterWithTeammates} alt='Picture of Peter and his team mates in Szazhalombatta'
          initial={{ maskImage: 'repeating-linear-gradient(90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={isLoaded && szazhalombattaInView ? { maskImage: 'repeating-linear-gradient(90deg, black 0%, black 100%, transparent 100%, transparent 100%)' } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
        <span>
        A százhalombattai rövidpályás Országos Bajnokságot 4 bronzéremmel zártunk: 50 m mell, 50 m gyors, 4x50 m mix vegyes váltó és 4x50 m férfi váltó
        </span>
      </div>
      <div className='slovenia'>
        <motion.img ref={peterSloveniaRef}
          className='slovenia-pic' src={peterSlovenia} alt='Picture of Peter in Slovak National Championship'
          initial={{ maskImage: 'repeating-linear-gradient(90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={isLoaded && peterSloveniaInView ? { maskImage: 'repeating-linear-gradient(90deg, black 0%, black 100%, transparent 100%, transparent 100%)' } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
        <span>
        A Szlovák Országos Bajnokságon 50 m gyorson ezüstöt és 50 m mellen bronzot értem el
        </span>
      </div>
      <div className='gyula'>
        <motion.img ref={peterGyulaRef}
          className='gyula-pic' src={peterPetike} alt='Picture of Peter on podium'
          initial={{ maskImage: 'repeating-linear-gradient(90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={isLoaded && peterGyulaInView ? { maskImage: 'repeating-linear-gradient(90deg, black 0%, black 100%, transparent 100%, transparent 100%)' } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
        <span>
        2022, Gyula, oszágos bajnok 100 m mellen
        </span>
      </div>
      <div className='torokbalint'>
        <motion.img ref={peterTorokbalintRef}
          className='torokbalint-pic' src={peterTorokbalint} alt='Picture of Peters medals from 2018'
          initial={{ maskImage: 'repeating-linear-gradient(90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={isLoaded && peterTorokbalintInView ? { maskImage: 'repeating-linear-gradient(90deg, black 0%, black 100%, transparent 100%, transparent 100%)' } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
        <span>
        2022, Évadzáró Szenior versenyen 4 aranyérmet szereztem: 50 m mell, 50 m gyors, 4x50 m mix vegyes váltó és 4x50 m férfi váltó 
        </span>
      </div>
      <div className='trophy'>
        <motion.img ref={peterKecskemetRef}
          className='trophy-pic' src={peterTrophy} alt='Picture of Peter holding a trophy'
          initial={{ maskImage: 'repeating-linear-gradient(90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={isLoaded && peterKecskemetInView ? { maskImage: 'repeating-linear-gradient(90deg, black 0%, black 100%, transparent 100%, transparent 100%)' } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
        <span>
        A 2023-as kecskeméti Országos Bajnokságon 5 éremmel büszkélkedhetek, 3 arannyal: 50 m gyors, 4x50 m gyorsváltó és 4x50 m mix gyorsváltó, valamint 2 ezüsttel: 50 m mell és 100 m mell
        </span>
      </div>
      <div className='diplom'>
        <motion.img ref={peterDiplomRef}
          className='diplom-pic' src={peterDiplom} alt='Picture of Peter holding a trophy'
          initial={{ maskImage: 'repeating-linear-gradient(90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={isLoaded && peterDiplomInView ? { maskImage: 'repeating-linear-gradient(90deg, black 0%, black 100%, transparent 100%, transparent 100%)' } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
        <span>
        A 2024-es Szlovák Országos Bajnokságon 2 aranyérmet szereztem: 4x50 m férfi vegyes és 4x50 m férfi gyors, 1 ezüstérmet: 4x50 m mix gyors, valamint 2 bronzérmet: 100 m mell és 50 m mell.        </span>
      </div>
      <div className='peter-EB'>
        <motion.img ref={peterEBRef}
          className='EB-pic' src={belgradpic} alt='Picture of Peter in Belgrad'
          initial={{ maskImage: 'repeating-linear-gradient(90deg, black 0%, black 0%, transparent 0%, transparent 100%)' }}
          animate={isLoaded && peterEBInView ? { maskImage: 'repeating-linear-gradient(90deg, black 0%, black 100%, transparent 100%, transparent 100%)' } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          viewport={{ once: true }}
          onLoad={() => setIsLoaded(true)}
        />
        <span>
        2024 kétszeres Európa-bajnoki ezüstérmes: 4x50 m férfi gyorsváltóban és 4x50 m mix vegyes váltóban.        </span>
      </div>


    </motion.div>
  )
}


