import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Classes() {

  const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}
  return(
    <>
    <h4>Orarend / Arak</h4>
    <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ep:back' /></button>


    </>
  )
}