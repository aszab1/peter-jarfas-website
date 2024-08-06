import { useNavigate } from 'react-router-dom'

export default function Videos(){

  const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}

  return(
    <>
    <h4>Videok a Tucc Tucc Tuccirol</h4>
    <button className="back-button" onClick={handleBackClick}>Vissza</button>
    </>
  )
}