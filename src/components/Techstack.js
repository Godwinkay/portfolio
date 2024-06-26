import React from "react";
import html from "../assets/htmllogo.webp";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import reactlogo from "../assets/React-icon.svg.png";
import next from "../assets/next.png";
import github from "../assets/github.png";
import aws1 from '../assets/aws1.png'
import aws2 from '../assets/aws2.png'
// import { FaHtml5, FaCss3Alt, FaReact, FaAws } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { SiRedux, SiTailwindcss } from "react-icons/si";
// import { FaSquareGithub } from "react-icons/fa6";

const Techstack = () => {
  return (
    <div className="py-12 my-16">
      <h1 className="text-center text-4xl font-serif font-bold">Tech Stacks</h1>
      <div className="flex gap-6 md:gap-12 py-12 justify-center flex-wrap px-8">
        <div>
          <img data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="w-8 h-8 md:w-16 md:h-16" src={html} alt="html logo" />
          {/*<FaHtml5 />*/}
        </div>

        <div>
          <img data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="w-8 h-8 md:w-16 md:h-16"src={css} alt="" />
          {/*<FaCss3Alt />*/}
        </div>

        <div>
          <img data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="w-8 h-8 md:w-16 md:h-16" src={javascript} alt="" />
          {/*<IoLogoJavascript />*/}
        </div>

        <div>
          <img data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="w-8 h-8 md:w-16 md:h-16" src={tailwind} alt="" />
          {/*<SiTailwindcss />*/}
        </div>

        <div>
          <img data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="w-8 h-8 md:w-16 md:h-16" src={next} alt="" />
          {/*<SiRedux />*/}
        </div>

        <div>
          <img data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="w-8 h-8 md:w-16 md:h-16" src={reactlogo} alt="" />
          {/*<FaReact />*/}
        </div>

        <div>
          <img data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="w-8 h-8 md:w-16 md:h-16" src={github} alt="" />
          {/*<FaSquareGithub />*/}
        </div>

        <div>
          <img data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="w-8 h-8 md:w-16 md:h-16" src={aws1} alt="" />
          {/*<FaAws />*/}
        </div>

        <div>
          <img data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="w-8 h-8 md:w-16 md:h-16" src={aws2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Techstack;
