import React from 'react'
import Picture from '../assets/kay.JPG'
import Blob from '../assets/blob.png'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-12 pb-16 px-4 md:px-4 gap-y-5 lg:flex-row-reverse md:justify-around md:mt-24 relative'>
      <div className='flex justify-center'>
        <img src={Blob} className='absolute w-[500px] h-[300px]' alt='blob'/>
        <img src={Picture} className='rounded-full h-[300px] w-[300px] z-10 border-[10px] border-lightblue' alt='kay'/>
      </div>
      <div className='flex flex-col gap-y-5 justify-center items-center w-4/5 px-6 lg:w-1/2 lg:items-start'>
        <h2 className='text-3xl md:text-5xl font-serif uppercase'>Godwin Ahiable</h2>
        <h3 className='font-serif text-xl md:text-3xl'>I'm<span className='text-lightblue italic'> <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'a Frontend Web Developer',
          2000, // wait 1s before replacing "Mice" with "Hamsters"
          'an AWS Solutions Architect',
          2000,
          
        ]}
        wrapper="span"
        speed={5}
        style={{ fontSize: '1em', display: 'inline-block' }}
        repeat={Infinity}
      /></span></h3>
        <p className='font-serif text-wrap max-h-[300px]'> I'm passionate about crafting visually appealing, responsive, and user-friendly interfaces and also leverage my knowledge of AWS cloud to deliver exceptional web experiences.</p>
      </div>
    </div>
  )
}

export default Hero
