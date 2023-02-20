import Link from 'next/link'
import React from 'react'
import{AiFillInstagram ,AiFillYoutube,AiFillFacebook,AiFillLinkedin ,AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      
    <p>
      2023 Thrill Rodeo All Rights Reserved
    </p>

    <p className='icons'>
      
      <Link href='https://instagram.com/thrillrodeo?igshid=OGQ2MjdiOTE='>
      <AiFillInstagram/>
      </Link>
      
      
      
      
      <Link href='/'>
      <AiFillYoutube/>
      </Link>
      



      <Link href='https://www.facebook.com/sonikavisharma?mibextid=ZbWKwL'>
      <AiFillFacebook/>
      </Link>
      
    </p>

    <p>
      Developer - Vaibhav Sharma
    
    </p>

    <p className='icons'>

        <Link href='https://www.linkedin.com/in/vaibhav-sharma-b4b998229/'>

         <AiFillLinkedin/>
          </Link>


          <Link href='https://github.com/vaibhav2sharma'>

          <AiFillGithub/>
          </Link>


    </p>

    </div>
  )
}

export default Footer
