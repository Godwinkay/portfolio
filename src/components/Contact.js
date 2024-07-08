import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", process.env.REACT_APP_NOTIFICATION_TOKEN);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
      
          event.target.reset();
          toast.success('Message Sent', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
    
        }
      };

  return (
    <div className='py-8 px-16 lg:px-32'> 
      <h1 className='text-center text-4xl font-bold mb-10'>Get In Touch</h1>
      <div className='space-y-6 md:flex gap-6 md:justify-center md:items-start'>
      <div className='md:w-2/3'>
      <form onSubmit={onSubmit} className='flex flex-col gap-4 md:w-2/3'>
        <input type='text' name='Full Name' required placeholder='Full Name' className='border-2 border-gray-300 py-2 px-3 rounded-md text-black text-lg focus:outline-none'/>
        <input type='email' name='Email' required placeholder='Enter Your Email Address' className='border-2 border-gray-300 py-2 px-3 rounded-md text-black text-lg focus:outline-none' />
        <textarea rows={4} name='Message' required placeholder='Write Your Message' className='border-2 border-gray-300 py-2 px-3 rounded-md text-black text-lg focus:outline-none' />
        <button type='submit' className='py-2 font-medium bg-[#0d0461] text-lightblue rounded-md'>Send Message</button>
      </form>
      </div>

      <div className='space-y-6 md:w-1/3'>
      <ul className='space-y-3'>
      <li className='font-bold uppercase text-lg'>Contact Me</li>
      <li><a className='flex items-center gap-2 text-md' href='tel:+233245101490' target="_blank" rel="noopener noreferrer"><div className='p-2 bg-[#0d0461] rounded-md'><BsTelephone className='text-lightblue size-6' /></div> +233245101490</a></li>
      <li><a className='flex items-center gap-2 text-md' href='wa.link/lwtb7j' target="_blank" rel="noopener noreferrer"><div className='p-2 bg-[#0d0461] rounded-md'><FaWhatsapp className='text-lightblue size-6'/></div> +233245101490</a></li>
      <li><a className='flex items-center gap-2 text-md' href='mailto:kwakuahiable@gmail.com' target="_blank" rel="noopener noreferrer"><div className='p-2 bg-[#0d0461] rounded-md'><MdOutlineEmail className='text-lightblue size-6'/></div> kwakuahiable@gmail.com</a></li>
    </ul>

    <div>
        <h1 className='font-bold uppercase text-lg'>Socials</h1>
        <div className='flex gap-4 text-3xl'>
        <a href="https://github.com/Godwinkay?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithubSquare size={42} className='text-[#0d0461]'/></a>
        <a href="https://www.linkedin.com/in/godwin-ahiable/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={42} className='text-[#0d0461]'/> </a>
        <a href="https://x.com/GodwynKay" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter size={42} className='text-[#0d0461]'/> </a>
        </div>
    </div>
    </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default Contact
