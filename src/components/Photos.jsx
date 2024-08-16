import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

import pic1 from '../assets/images/cool-vibesgirl.jpg'
import pic2 from '../assets/images/ciaogirl.jpg'
import grouppic1 from '../assets/images/grouppic1.jpg'
import grouppic2 from '../assets/images/grouppic2.jpg'
import grouppic3 from '../assets/images/grouppic3.jpg'
import swimlesson from '../assets/images/uszasoktatas.jpeg'


export default function Photos(){

  const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}

  return(
    <>
    
    <div className='swim-div'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima id doloremque, deserunt, eligendi ad, nemo nihil voluptatem obcaecati exercitationem debitis dolorem enim rerum cumque! Quam animi qui dolor laborum.</p>
    <img className='swim' src={swimlesson} alt="swim lesson" />
    </div>
    <div>
      <img className='swim' src={grouppic3} alt="in front of natatorium" />
    </div>
    <div className='group'>
      <img className='swim' src={grouppic1} alt="swim lesson, group picture" />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam dolorum, vero mollitia velit ipsam ipsum, sequi assumenda quam ut obcaecati ratione ullam dolor cum veniam nemo pariatur repellat quos.</p>
    </div>
    <div className='group'>
      <img className='pics' src={pic1} alt="with one of the student" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque aut minus ullam reiciendis provident fugiat, nisi necessitatibus, saepe ipsa aliquid officia quaerat quisquam error incidunt magni, iusto autem? Ut!</p>
      <img className='pics' src={pic2} alt="with one of the student" />

    </div>
    <div>
      <img className='swim' src={grouppic2} alt="group picture with the children during class" />
    </div>
    <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ep:back' /></button>
    </>

  )
}