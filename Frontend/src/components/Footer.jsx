import React from 'react'
import { FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-screen h-10 bg-black-600 flex justify-center items-center'>
      <div className='flex justify-center items-center'>
        <a href="https://www.facebook.com/hubli.oxford?mibextid=ZbWKwL"><FaFacebookSquare className='text-4xl p-2 m-2 font-Lobster' /></a>
        <a href="https://www.instagram.com/oxford_bca_hubballi/?igsh=MTJpbDBwOWo5OHBkdg%3D%3D"><FaInstagramSquare className='text-4xl p-2 m-2 font-Lobster' /></a>
      </div>
    </div>
  )
}

export default Footer