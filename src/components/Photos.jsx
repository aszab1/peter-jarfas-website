import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

import pic1 from '../assets/images/cool-vibesgirl.jpg'
import pic2 from '../assets/images/ciaogirl.jpg'
import grouppic1 from '../assets/images/grouppic1.jpg'
import grouppic2 from '../assets/images/grouppic2.jpg'
import grouppic3 from '../assets/images/grouppic3.jpg'
import swimlesson from '../assets/images/uszasoktatas.jpg'
import negyen from '../assets/images/negyen.jpg'


export default function Photos(){

  const navigate = useNavigate()

const handleBackClick = () => {
  navigate('/')
}

  return(
    <div style={{ backgroundColor: '#f6edd6'}}>
    <div className='swim-div'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima id doloremque, deserunt, eligendi ad, nemo nihil voluptatem obcaecati exercitationem debitis dolorem enim rerum cumque! Quam animi qui dolor laborum.</p>
    <img className='swim-lesson' src={swimlesson} alt="swim lesson" />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#F6EDD6"><rect fill="#F7AF6C" width="100%" height="100%"/>
    <path d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z"></path>
    </svg>
    <div className='uszoda-div'>
    <svg
    className='bubbles'
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 409.6 409.6"
    
  >
    <path d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0" fill="url(&quot;#SvgjsLinearGradient1042&quot;)"></path><defs><linearGradient id="SvgjsLinearGradient1042"><stop stop-color="#d5dee7" offset="0"></stop><stop stop-color="#ffffff" offset="1"></stop></linearGradient></defs></svg>
  
  <img className='uszoda' src={grouppic3} alt="in front of natatorium" />
</div>

<div className='happy-div'>
    <div className='group'>
      <img className='swim-group-pic' src={grouppic1} alt="swim lesson, group picture" />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam dolorum, vero mollitia velit ipsam ipsum, sequi assumenda quam ut obcaecati ratione ullam dolor cum veniam nemo pariatur repellat quos.</p>
    </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#F7AF6C"><rect fill="#F6EDD6" width="100%" height="100%"/>
    <path d="M0 0v90.2C49.7 99.9 105 82 160 65c75.5-23.3 145.5-22.4 222-3 63 16 119 14 173-8 79.5-32.4 156.2-27.6 240-10 82.6 17.4 143-1 205-31.7V0H0Z"></path>
    </svg>
    <div className='group'>
      <img className='pic1' src={pic1} alt="with one of the student" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque aut minus ullam reiciendis provident fugiat, nisi necessitatibus, saepe ipsa aliquid officia quaerat quisquam error incidunt magni, iusto autem? Ut!</p>
      <img className='pic2' src={pic2} alt="with one of the student" />

    </div>
    <div>
      <img className='swim' src={negyen} alt="Peter and his teammates during competition" />
    </div>
    <button className="back-button" onClick={handleBackClick}><Icon className='back-button' icon='ep:back' /></button>
    </div>

  )
}