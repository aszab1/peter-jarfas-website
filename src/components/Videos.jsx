import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Videos(){

  const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}

  return(
    <>
    <h4>Videok a Tucc Tucc Tuccirol</h4>
    <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ep:back' /></button>
    </>
  )
}