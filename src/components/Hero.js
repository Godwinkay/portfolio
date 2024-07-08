import React from 'react'
import Picture from '../assets/kay2.jpg'
import Blob from '../assets/blob.png'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  const handleCVClick = () => {
    window.open('https://drive.google.com/file/d/1VQJ6lCW072KJPZRev_46D86KSSGFVoXL/view?usp=sharing', '_blank');
  };
  return (
    <div className='flex flex-col justify-center items-center mt-12 pb-16 px-6 md:px-12 gap-y-5 lg:flex-row-reverse md:justify-around md:mt-24 relative'>
      <div className='flex justify-center'>
        <img src={Blob} className='absolute w-[500px] h-[300px]' alt='blob'/>
        <img data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" src={Picture} className='rounded-full h-[300px] w-[300px] z-10 border-[10px] border-lightblue' alt='kay'/>
      </div>
      <div data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine" className='flex flex-col gap-y-5 justify-center items-center md:w-4/5 px-6 lg:w-1/2 lg:items-start'>
        <h2 className='text-xl md:text-5xl font-serif uppercase'>Godwin Ahiable</h2>
        <h3 className='font-serif text-sm md:text-3xl'>I'm<span className='text-lightblue italic'> <TypeAnimation
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
        <p className='font-serif text-wrap max-h-[300px] text-sm md:text-base text-justify'>  As a dedicated frontend web developer and AWS solutions architect, I am passionate about crafting visually appealing, responsive, and user-friendly interfaces that provide exceptional web experiences. With a deep understanding of modern web technologies and cloud computing principles, I strive to deliver innovative and efficient solutions that cater to the unique needs of my clients.
        </p>
        <button
        className='bg-transparent border-[1px] text-white py-2 px-6 rounded-full hover:bg-blue-500 hover:border-none transition-colors duration-300'
        onClick={handleCVClick}
      >
        View My CV
      </button>
        </div>
    </div>
  )
}

export default Hero
