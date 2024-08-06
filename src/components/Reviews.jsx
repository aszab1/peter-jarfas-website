import { useNavigate } from 'react-router-dom'

export default function Reviews(){

  const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}
  return(
    <>
    <h4>Velemenyek</h4>
    <button className="back-button" onClick={handleBackClick}>Vissza</button>
    </>
  )
}