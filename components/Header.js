import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/13.jpg";
export default function Header() {
  return <div className="header">
   <div className="header_logo">
    <Image src={logo} width={150} height={50}></Image>
    </div>
    <div className="header_content">
    
    <Link className='link1' href="/" >Home</Link>
    <Link className='link1' href="/about" >About</Link>
    <Link className='link1' href="/skills" >Skills</Link>
    <Link className='link1' href="/contact" >Contact</Link>
   </div>
   </div>
}
