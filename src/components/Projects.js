import React from "react";
import thriftwear from "../assets/thrifwear.png";
import rental from '../assets/rental.png'
import quicksos from '../assets/quicksos.png'
import { FaSquareGithub } from "react-icons/fa6";
import { BsBoxArrowUpRight, BsBoxArrowUpLeft } from "react-icons/bs";



const Projects = () => {
  return (
    <div className="px-16 lg:px-24 flex flex-col gap-8 items-center bg-[#0d0461] text-white py-16">
      <h2 className="text-4xl font-serif font-bold mb-8">Projects</h2>
      <div className="lg:flex gap-12 lg:justify-around lg:items-center mb-12 space-y-4">
        <div className="space-y-2 lg:w-1/2">
          <h3 className="font-bold">ThriftWear E-Commerce Website</h3>
          <p className="text-justify">
            This is a Website where you could purchase second hand clothing,
            bags and shoes. It has a shop page where items can be selected by
            category and a function cart page. 
          </p>
          <div className="flex gap-x-12 items-end mt-4">
          <a href="https://github.com/Godwinkay/thriftware.git" target="_blank" rel="noopener noreferrer">< FaSquareGithub size={30} /> </a>
            <a href="https://thriftwear.netlify.app/" target="_blank" rel="noopener noreferrer"><p className="flex items-baseline gap-x-2">View Website <BsBoxArrowUpRight /></p> </a>
          </div>
        </div>

        <div className="lg:w-1/2">
            <img  data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="rounded-lg" src={thriftwear} alt="thriftwear" />  
        </div>
      </div>

      <div className="lg:flex lg:flex-row-reverse gap-12 lg:justify-around lg:items-center mb-12 space-y-4">
        <div className="space-y-2 lg:w-1/2">
          <h3 className="font-bold">QuickSOS Emergency Request</h3>
          <p className="text-justify">
          When the unexpected happens, don't hesitate. Our emergency request app is your one-stop solution for immediate assistance. Whether you need fire, police, medical, disaster relief, towing, or animal services, a simple tap connects you to the right resources quickly.
          </p>
          <div className="flex gap-x-12 items-end mt-4">
            <a href="https://github.com/Godwinkay/emergency-request-app.git" target="_blank" rel="noopener noreferrer">< FaSquareGithub size={30} /> </a>
            <a href="https://quicksos-psi.vercel.app/" target="_blank" rel="noopener noreferrer"><p className="flex items-baseline gap-x-2">View Website <BsBoxArrowUpLeft /></p></a>
          </div>
        </div>

        <div className="lg:w-1/2">
            <img  data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="rounded-lg" src={quicksos} alt="rental" />  
        </div>
      </div>

      <div className="lg:flex gap-12 lg:justify-around lg:items-center mb-12 space-y-4">
        <div className="space-y-2 lg:w-1/2">
          <h3 className="font-bold">Car Dealership Website</h3>
          <p className="text-justify">
          Our all-in-one automotive platform offers a seamless shopping and service experience. Rent vehicles for short or long-term, shop genuine spare parts, and access our expert repair services - all through a single, user-friendly website. 
          </p>
          <div className="flex gap-x-12 items-end mt-4">
          <a href="https://github.com/Godwinkay/Car-Dealership--Tailwind-React.git" target="_blank" rel="noopener noreferrer">< FaSquareGithub size={30} /> </a>
            <a href="https://yourcarguy.netlify.app/" target="_blank" rel="noopener noreferrer"><p className="flex items-baseline gap-x-2">View Website <BsBoxArrowUpRight /></p> </a>
          </div>
        </div>

        <div className="lg:w-1/2">
            <img  data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="rounded-lg" src={rental} alt="thriftwear" />  
        </div>
      </div>

      
    </div>
  );
};

export default Projects;
