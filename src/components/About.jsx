import peter from '../assets/images/tucci.jpeg'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'


export default function About() {

  const { t, i18n } = useTranslation()

  return (
    <div className="about-container">
      <motion.div
        className="about"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: 95, opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          className="peter"
          src={peter}
          alt="Picture of Peter Jarfas"
        />
        
        <div className='text-div'>
        <p>{t("introName")}</p>
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
        </div>
      </motion.div>
    </div>
  )
}
