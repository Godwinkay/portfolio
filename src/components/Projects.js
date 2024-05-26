import React from "react";
import thriftwear from "../assets/thrifwear.png";
import rental from '../assets/rental.png'
import { FaSquareGithub } from "react-icons/fa6";
import { BsBoxArrowUpRight, BsBoxArrowUpLeft } from "react-icons/bs";


const Projects = () => {
  return (
    <div className="px-16 lg:px-24 flex flex-col gap-8 items-center bg-black text-white py-16">
      <h2 className="text-4xl font-serif font-bold mb-8">Projects</h2>
      <div className="lg:flex gap-12 lg:justify-around mb-12 space-y-4">
        <div className="space-y-2">
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

        <div>
            <img className="rounded-lg" src={thriftwear} alt="thriftwear" />  
        </div>
      </div>

      <div className="lg:flex lg:flex-row-reverse gap-12 lg:justify-around mb-12 space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold">Car Dealership Website</h3>
          <p className="text-justify">
          Our all-in-one automotive platform offers a seamless shopping and service experience. Rent vehicles for short or long-term, shop genuine spare parts, and access our expert repair services - all through a single, user-friendly website. 
          </p>
          <div className="flex gap-x-12 items-end mt-4">
            <a href="https://github.com/Godwinkay/Car-Dealership--Tailwind-React.git" target="_blank" rel="noopener noreferrer">< FaSquareGithub size={30} /> </a>
            <a href="https://yourcarguy.netlify.app/" target="_blank" rel="noopener noreferrer"><p className="flex items-baseline gap-x-2">View Website <BsBoxArrowUpLeft /></p></a>
          </div>
        </div>

        <div>
            <img className="rounded-lg" src={rental} alt="rental" />  
        </div>
      </div>
    </div>
  );
};

export default Projects;
