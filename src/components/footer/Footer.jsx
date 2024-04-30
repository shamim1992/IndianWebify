import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex  justify-around text-white p-5 bg-blue-500'>
      <div className=''>
        Copyright &copy; Indian Webify
      </div>
      <div className='hidden lg:flex'>
        Made with &#10084; by Shamim
      </div>
      <div className=' gap-2 hidden lg:flex'>
        <a className="btn btn-sm bg-base-100 hover:bg-green-500 hover:text-white rounded-2xl "><FaWhatsapp /></a>
        <a className="btn btn-sm bg-base-100 hover:bg-blue-500 hover:text-white rounded-2xl "><FaFacebook /></a>
        <a className="btn btn-sm bg-base-100 hover:bg-red-500 hover:text-white rounded-2xl "><FaInstagram /></a>
        <a className="btn btn-sm bg-base-500 hover:bg-black hover:text-white rounded-2xl "><FaTwitter /></a>
      </div>
    </div>
  )
}

export default Footer