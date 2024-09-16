import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'
import './i18n'
import { useState, useEffect } from 'react'
import { FormControl, FormLabel, Flex } from '@chakra-ui/react'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import ScrollToTop from './components/ScrollToTop'
import './App.css'






function App() {

  const { i18n } = useTranslation()
  const [isHun, setIsHun] = useState(true) // State to manage toggle

  // Set default language to Hungarian when the component mounts
  useEffect(() => {
    i18n.changeLanguage('hu')
  }, [i18n])

  const toggleLanguage = () => {
    const newLang = isHun ? 'en' : 'hu'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
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
            color: '#dabc76',
          },
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#fff',
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
        color: 'black',
      },
    },
    '& .MuiSwitch-track': {
      borderRadius: 20 / 2,
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      boxSizing: 'border-box',
    },
  }))


  useEffect(() => {
    const root = document.getElementById('root');
    const isBubblePage = location.pathname.includes('videos'); // Adjust as needed for other pages

    if (isBubblePage) {
      root.classList.add('bubble-bg-active');
      root.classList.remove('default-bg'); // Ensure only one background is active
    } else {
      root.classList.remove('bubble-bg-active');
      root.classList.add('default-bg'); // Set default background color
    }
  }, [])

  return (
    <>
    <ScrollToTop />
    <main>
    <Flex justifyContent="flex-end" alignItems="center" paddingTop={14} paddingEnd={80}>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="language-switch" mb="0" mr={2}>
            </FormLabel>
            <LanguageSwitch
              checked={!isHun}
              onChange={toggleLanguage}
              id="language-switch"
            />
          </FormControl>
        </Flex>
    <Outlet/>
    <Footer />
    </main>
    </>
  )
}

export default App
