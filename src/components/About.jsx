import peter from '../assets/images/tucci.jpeg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'


export default function About() {
  const [isFlipped, setIsFlipped] = useState(false)
  const navigate = useNavigate()

  const handleAboutClick = () => {
    setIsFlipped(true)
  }

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => {
        navigate('/')
      }, 900)
      return () => clearTimeout(timer)
    }
  }, [isFlipped, navigate])

  return (
    <AnimatePresence>
      {(
        <div className="about-container">
          <motion.div
            className="about"
            onClick={handleAboutClick}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isFlipped ? 90 : 0 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}>
            <img
              className="peter"
              src={peter}
              alt="Picture of Peter Jarfas"
            />
            <p>Járfás Péter vagyok, 2020 óta foglalkozom úszásoktatással.</p>
            <p>
              Célom, hogy minden gyermek vízbiztos legyen, <br />
              elsajátítsa a gyors-, hát- és mellúszást, és szeresse, amit csinál. <br />
              Emellett a versenyző gyerekeknek megtanítom a pillangóúszás alapjait is.
            </p>
            <p>
              Aktívan versenyzem a szenior úszásban, példát mutatva tanítványaimnak. <br />
              Számos eredményt értem el, köztük arany- és ezüstérmeket az EB-n.
            </p>
            <p>
              Hiszem, hogy a versenyek a fejlődés legjobb mércéi, <br />
              ezért minden évben megrendezzük a Mikulás kupát <br />és egy tavaszi versenyt is,
              <br /> ahol minden résztvevő nyer valamit.
            </p>
          </motion.div>
        </div>
      )}
      {/* <button className="back-button" onClick={handleAboutClick}>Vissza</button> */}
    </AnimatePresence>
  )
}
