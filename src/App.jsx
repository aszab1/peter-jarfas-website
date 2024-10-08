import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'
import './i18n'
import { useState, useEffect } from 'react'
import { FormControl, FormLabel, Flex } from '@chakra-ui/react'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import { AnimatePresence, motion } from 'framer-motion'


const pageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.5 },
  },
};

const loadingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

function App() {
  const { i18n } = useTranslation()
  const [isHun, setIsHun] = useState(true)
  const navigation = useNavigation()

  // Set default language to Hungarian only on the first mount
  useEffect(() => {
    if (sessionStorage.getItem('language')) {
      const savedLang = sessionStorage.getItem('language')
      i18n.changeLanguage(savedLang)
      setIsHun(savedLang === 'hu')
    } else {
      i18n.changeLanguage('hu')
      sessionStorage.setItem('language', 'hu')
    }
  }, [i18n])

  const toggleLanguage = () => {
    const newLang = isHun ? 'en' : 'hu'
    i18n.changeLanguage(newLang)
    sessionStorage.setItem('language', newLang)
    setIsHun(!isHun)
  }

  // Custom MUI Switch with label on the thumb
  const LanguageSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb': {
          backgroundColor: '#334459',
          '&:before': {
            content: '"HU"',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            fontSize: 12,
            fontWeight: 500,
            color: '#fcfcf2',
          },
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#fcfcf2',
      width: 32,
      height: 32,
      '&:before': {
        content: '"EN"',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        fontSize: 12,
        fontWeight: 500,
        color: '#334459',
      },
    },
    '& .MuiSwitch-track': {
      borderRadius: 20 / 2,
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      boxSizing: 'border-box',
    },
    // Media query for larger screens to scale up to 1.3x
    [theme.breakpoints.up('md')]: {
      width: 80.6,
      height: 44.2,
      padding: 9.1,
      '& .MuiSwitch-switchBase': {
        transform: 'translateX(7.8px)',
        '&.Mui-checked': {
          transform: 'translateX(28.6px)',
          '& .MuiSwitch-thumb': {
            '&:before': {
              fontSize: 15.6,
            },
          },
        },
      },
      '& .MuiSwitch-thumb': {
        width: 41.6,
        height: 41.6,
        '&:before': {
          fontSize: 15.6,
        },
      },
    },

  }))


  return (
    <>
      <ScrollToTop />
      <main >
        <Flex
          className='switch-div'
          justifyContent="flex-end"
          alignItems="center"
          paddingTop={25}
          paddingEnd={45}
          maxWidth="100%"
          width="auto"
          position="absolute"
          right={0}
          zIndex={1000}
        >
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="language-switch" mb="0" mr={2}></FormLabel>
            <LanguageSwitch checked={!isHun} onChange={toggleLanguage} id="language-switch" />
          </FormControl>
        </Flex>
        <AnimatePresence mode='wait'>
          {
            navigation.state === 'idle' ? (
              <motion.div
                key="content"
                ariants={pageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ backgroundColor: '#60a6f0' }}
              >
                <Outlet />
              </motion.div>
            ) : (<motion.div
              key="loading"
              variants={loadingVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ backgroundColor: '#60a6f0' }}
            >
            </motion.div>
            )}
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}

export default App
