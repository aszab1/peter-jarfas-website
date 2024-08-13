import peter from '../assets/images/tucci.jpeg'

import { useNavigate } from 'react-router-dom'


export default function About(){
const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}

  return(
    <div className="about-container">
    <div className="about" onClick={handleBackClick}>
      <img className='peter' src={peter} alt={`picture of Peter Jarfas`} />
    <p>Járfás Péter vagyok, 2020 óta foglalkozom úszásoktatással.</p>
    <p>Célom, hogy minden gyermek vízbiztos legyen, <br />elsajátítsa a gyors-, hát- és mellúszást, és szeresse, amit csinál. <br />Emellett a versenyző gyerekeknek megtanítom a pillangóúszás alapjait is.</p>
    <p>Aktívan versenyzem a szenior úszásban, példát mutatva tanítványaimnak. <br />Számos eredményt értem el, köztük arany- és ezüstérmeket az EB-n.</p>
    <p>Hiszem, hogy a versenyek a fejlődés legjobb mércéi, <br />ezért minden évben megrendezzük a Mikulás kupát <br />és egy tavaszi versenyt is,<br /> ahol minden résztvevő nyer valamit.</p>
    <button className="back-button" onClick={handleBackClick}>Vissza</button>
    </div>
    </div>

  )
}
