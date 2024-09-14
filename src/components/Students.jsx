import { motion, } from 'framer-motion'
import { Flex, Grid, Container } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ImageCard from './ImageCard'
import podiumboy from '../assets/images/podiumboy.png'
import medalgirl from '../assets/images/medalgirl.jpg'
import peterStudents from '../assets/images/peter-students.jpg'

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
  delay: 0.1,
}


const Students = () => {

  const { t } = useTranslation()


  return (
    <AnimatePresence mode="wait">
      <motion.div
        layoutId="nav-item"
        key="students-page"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Container maxW="100%" p={5} mt={60}>
          <Flex direction={{ base: "column", lg: "row" }}>
            <Grid
              flex={1}
              templateColumns="repeat(auto-fill, minmax(450px, 1fr))"
              gap={50}
              width="100%"
              margin={50}
            >
              <ImageCard
                imageSrc={peterStudents}
                altText="Picture of Peter and his students during competition"
                title={t("studentName1")}
                description={t("studentAchievement1")}
                objectFit='cover'
              />

              <ImageCard
                imageSrc={podiumboy}
                altText="Picture of Peters student"
                title={t("studentName2")}
                description={t("studentAchievement2")}
                objectFit='cover'
              />
              <ImageCard
                imageSrc={medalgirl}
                altText="Picture of Peter and his student, Luca"
                title={t("studentName3")}
                description={t("studentAchievement3")}
                objectFit='contain'
              />
            </Grid>
          </Flex>
        </Container>
      </motion.div>
    </AnimatePresence>
  )
}
export default Students 