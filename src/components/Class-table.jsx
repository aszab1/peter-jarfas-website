import { useNavigate } from 'react-router-dom'

export default function Classes() {

  const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}
  return(
    <>
    <h4>Orarend / Arak</h4>
    <button className="back-button" onClick={handleBackClick}>Vissza</button>

    </>
  )
}