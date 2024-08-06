import { useNavigate } from 'react-router-dom'

export default function Awards(){

  const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}

  return(
    <>
    <h4>Eredmenyek</h4>
    <button className="back-button" onClick={handleBackClick}>Vissza</button>
    </>
  )
}