import peter from '../assets/images/tucci.jpeg'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'


export default function About() {

  const { t } = useTranslation()

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
        <p>{t("intro")}</p>
        <p> {t("goal1")}<br />{t("goal2")} <br />{t("goal3")}</p>
        
        <p>{t("aboutComp1")}<br />{t("aboutComp2")} </p>

        <p>{t("belief1")}<br />{t("belief2")}<br />{t("belief3")} <br /> {t("belief4")} </p>
        </div>
      </motion.div>
    </div>
  )
}
