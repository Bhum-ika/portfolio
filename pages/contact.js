import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import mail from "../images/mail.png"
import add from "../images/add.png"
import phn from "../images/phn.png"
export default function contact() {
  return (
    <div className='contact'>
       <div className='forms'>
       <form>  
<h3> Enter your name</h3>  
<input type="text"/>  
<h3>Enter your mail</h3>  
<input type="email"/> 
<h3>Enter your message</h3>
<textarea name='message'/>
<input type="submit" value="Submit" className='submit_button'/>   
</form> 
       </div>
       <div className='optn'>
        <div className='optn1'>
        <Image src={add} width={40} height={35}/>
        <p>New Delhi</p>
        </div>
        <div className='optn1'>
            <Image src={mail} width={40} height={35}/>
            <Link className='link_cont' href="https://sharmabhmi@gmail.com">sharmabhmi@gmail.com</Link>
            </div>
            <div className='optn1'>
            <Image src={phn} width={40} height={35}/>
        <p>8799712276</p>
            </div>
       </div>
  
    </div>
  
)
}
