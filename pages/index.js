import React from 'react'
import Image from "next/image";
import bhumi from "../images/bhumi.jpeg";
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function index() {
  return (
    <div className="index">
    <div className="left">
      <h1 className="heading">Hello there,</h1>
      <h1 className="heading2">I am Bhumika Sharma</h1>
      <h4 className="heading3">A Passionate Web Developer and DSA Enthusiast</h4>
      {/*
        {content && <div className="content">
         <h5>Java</h5>
         <h5>C</h5>
         <h5>HTML</h5>
         <h5>CSS</h5>
         <h5>ReactJs</h5>
         <h5>Python</h5>
         <h5>Javascript</h5>
          </div>}
        {!content && (
         
        )} */}
         <div className="btn">
        
        <Link href="/about">
          <button className="btn1">Know More</button>
          </Link>
      </div>
      </div>

    <div className="right">
      <Image className="ima" src={bhumi} width={400} height={400} alt="Picture of the author" />
    </div>
    <footer />

  </div>
  )
}
