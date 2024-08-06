import { useNavigate } from 'react-router-dom'


export default function About(){
const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}

  return(
    <div className="about-container">
    <div className="about">
    <p>Járfás Péter vagyok, 2020 óta foglalkozom úszásoktatással.</p>
    <p>Célom, hogy minden gyermek vízbiztos legyen, elsajátítsa a gyors-, hát- és mellúszást, és szeresse, amit csinál. Emellett a versenyző gyerekeknek megtanítom a pillangóúszás alapjait is.</p>
    <p>Aktívan versenyzem a szenior úszásban, példát mutatva tanítványaimnak. Számos eredményt értem el, köztük arany- és ezüstérmeket az EB-n.</p>
    <p>Hiszem, hogy a versenyek a fejlődés legjobb mércéi, ezért minden évben megrendezzük a Mikulás kupát és egy tavaszi versenyt is, ahol minden résztvevő nyer valamit.</p>
    <button className="back-button" onClick={handleBackClick}>Vissza</button>
    </div>
    </div>

  )
}
