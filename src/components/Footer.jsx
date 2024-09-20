import { Icon } from '@iconify/react'

export default function Footer(){
  return(
    <footer className="footer">
      <div className="contact">
        <div className='location-div'>
          <Icon className='location' icon='fa6-solid:location-dot'></Icon>
          <p className='location-p'>Koppány-Völgye Tanuszoda, <br />Tab, Kossuth Lajos u. 172</p>
        </div>
        <div className='phone-div'>
      <Icon className='phone' icon='line-md:phone-call'></Icon>
        <p className='phone-nr'>+36 70 611 6611</p>
        </div>
        <div className='email-div'>
        <Icon className='email' icon='streamline:send-email'></Icon>
        <p className='email-p'>knvb83@gmail.com</p>
        </div>
        <div className='socials'>
        <Icon className='youtubeIcon' icon='bi:youtube' onClick={() => window.open('https://www.youtube.com/@peterjarfas8805')}></Icon>
        <Icon className='insta' icon='ri:instagram-fill' onClick={() => window.open('https://www.instagram.com/poseidontab?igsh=MTZvaTh6ZzM4NGh5bA==')}></Icon>
        </div>
      </div>
      <div className="footer-div">
        <p className="footer-p2">Website by <a className="adrienn" href="https://www.adriennszabo.com/" target="_blank" rel="noopener noreferrer">Adrienn Szabo</a>
        </p>
      </div>
    </footer>
  )
}