import { motion, } from 'framer-motion'
import { Flex, Grid, Container } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ImageCard from './ImageCard'

import medals from '../assets/images/medals.jpg'
import belgradpic from '../assets/images/belgrade-2024.jpeg'
import peterWithTeammates from '../assets/images/peter-and-teammates.jpg'
import peterSlovenia from '../assets/images/peter-slovenia.jpg'
import peterDiplom from '../assets/images/peter-diplom.jpg'
import peterPetike from '../assets/images/peter-petike.jpeg'
import peterTorokbalint from '../assets/images/peter-torokbalint.jpg'
import peterTrophy from '../assets/images/peter-trophy.jpg'



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

const Teacher = () => {

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
                imageSrc={belgradpic}
                alt='Picture of Peter in Belgrad'
                description={t("belgradEB")}
                objectFit='contain'
              />
              <ImageCard
                imageSrc={peterDiplom}
                alt='Picture of Peter holding his certificates'
                description={t("diplom")}
                objectFit='contain'
              />
              <ImageCard
                imageSrc={peterTrophy}
                alt='Picture of Peter holding a trophy'
                description={t("thophyPic")}
                objectFit='contain'
              />
              <ImageCard
                imageSrc={peterTorokbalint}
                alt='Picture of Peter sitting on podium'
                description={t("torokbalint")}
                objectFit='cover'
              />
              <ImageCard
                imageSrc={peterPetike}
                alt='Picture of Peter standing on podium with his son'
                description={t("gyula")}
                objectFit='contain'
              />
              <ImageCard
                imageSrc={peterSlovenia}
                alt='Picture of Peter in Slovak National Championship'
                description={t("slovenia")}
                objectFit='cover'
              />
              <ImageCard
                imageSrc={peterWithTeammates}
                alt='Picture of Peter and his team mates in Szazhalombatta'
                description={t("szazhalombatta")}
                objectFit='contain'
              />
              <ImageCard
                imageSrc={medals}
                alt='Picture of Peters medals from 2018'
                description={t("medals")}
                objectFit='cover'
              />

            </Grid>
          </Flex>
        </Container>
      </motion.div>
    </AnimatePresence>
  )
}


export default Teacher

