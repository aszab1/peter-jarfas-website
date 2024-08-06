import { useNavigate } from 'react-router-dom'

export default function Photos(){

  const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}

  return(
    <>
    <h4>Kepek</h4>
    <button className="back-button" onClick={handleBackClick}>Vissza</button>
    </>

  )
}