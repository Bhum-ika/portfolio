import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import tele from "../images/tele.png";
import insta from "../images/insta.png";
import git from "../images/git.png";
import linkedin from "../images/linkedin.png";
export default function Footer() {
  return (
    <>
    <div className='footer'>
      <Link className='link' href="https://www.linkedin.com/in/bhumikaasharma">
        <Image src={linkedin} height={20} width={20}></Image>
      </Link>
      <Link className='link' href="https://github.com/Bhum-ika">
      {/* <Image src={git} height={10} width={20}></Image> */}
      </Link>
      <Link className='link' href="https://t.me/bhumikash">
      {/* <Image src={tele} height={10} width={10}></Image> */}
      </Link>
      <Link className='link' href="https://instagram.com/itsbhumee.sharma?igshid=NzMyMjgxZWIzNw==">
      {/* <Image src={insta} height={10} width={10}></Image> */}
      </Link>
     
     </div> 
    
     </>
  )
}
