
import Awards from './Awards'
import Classes from './Class-table'
import Reviews from './Reviews'


import logo from '../assets/images/logo.png'
import { Icon } from '@iconify/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Home(){

  return(
    <>
    <div className='photo-div'>
    <RouterLink to="/kepek">
    <Icon className='photo-icon' icon='fa-solid:camera-retro'></Icon>
    </RouterLink>
    </div>
    <div>
    <RouterLink to="/videok">
    <Icon  className='video-icon' icon='hugeicons:camera-video'/>
    </RouterLink>
    <img className='logo' src={logo} alt={`A logo of Peter's intitals and the sea`}/>
    <RouterLink to="/eredmenyek">
    <Icon className='awards-logo' icon='noto:trophy'></Icon>
    </RouterLink>
    </div>
    <RouterLink to='/orarend-arak'>
    <Icon className='schedule-logo' icon='grommet-icons:schedules'></Icon>

    </RouterLink >
    <RouterLink to='/velemenyek'>
    <Icon className='comments-logo' icon='majesticons:comment-text-line'></Icon>
    </RouterLink>
      <p>Ez egy példa a magyar betűk használatára: Á, É, Í, Ó, Ö, Ő, Ú, Ü, Ű</p>
    
    </>

  )
}