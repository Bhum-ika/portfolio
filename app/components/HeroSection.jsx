"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion"
const HeroSection = () => {
  return(
   <section className='pb-16 pt-24'>
     <div className='flex flex-wrap-reverse sm:flex-nowrap'>
   <motion.div initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-snug font-extrabold">
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            Hello, I&apos;m{" "}
            </span>   
            <br></br>      
    <TypeAnimation
      sequence={[
        'Bhumika Sharma',
        1000,
        'Web Developer',
        1000,
        'DSA Enthusiast',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />

            </h1>
    <p className='text-[#ADB7BE]  text-base sm:text-lg lg:text-xl mb-6 mr-8'>
    Over the past 3 years, I&apos;ve dedicated myself to mastering new technologies and skills. I thrive on tackling new challenges and using them as opportunities to grow. Let&apos;s connect and explore the possibilities together.
     </p>
    <div>
        <button className='px-6 py-3 rounded-full mr-4 sm:w-fit w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white'>Hire me</button>
        <a href="./resume.pdf" download="resume.pdf"><button className='px-1 py-1 rounded-full mr-4 sm:w-fit w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
              </button></a>
    </div>
    </motion.div> 
    <motion.div initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className='col-span-4 place-self-center mt-4 lg:mt-0'>
    <div className='rounded-full w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative overflow-hidden mb-8 ' style={{ background: 'none', boxShadow: '10px 4px 10px rgba(145, 170, 219, 0.33), -10px -4px 10px rgba(135, 178, 212, 0.33), -4px 10px 15px 6px rgba(194, 8, 219, 0.33)' }}>
  <Image
    src='/images/hero-image.jpg'
    alt="hero image"
    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
    width={400}
    height={400}
    style={{ borderRadius: '50%' }}
  />
</div>



    
    </motion.div>
    </div>
    
   </section>
  )
};

export default HeroSection