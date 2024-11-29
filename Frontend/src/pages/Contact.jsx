import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import OxfordLogo from '../assets/oxford pNG TRANS.png'
import image from '../assets/Untitled design.jpg'

const Contact = () => {
  return (
    <div className='"flex flex-col min-h-screen"'>
      <div>
        <NavBar />
      </div>
      <div
        className="flex-grow bg-cover bg-center flex flex-col justify-start items-center h-[85vh]"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-semibold m-2 text-white'>Contact Information</h1>
          <div className='flex flex-col justify-center items-center mb-4 text-white'>
            <h1>Chairman</h1>
            <p>Shri Vasant B Horatti</p>
          </div>
          <div className='flex flex-col justify-center items-center mb-4 text-white'>
            <h1>Principal</h1>
            <p>Prof. Manjunath Muttalgeri</p>
          </div>
          <div className='flex flex-col justify-center items-center mb-4 text-white'>
            <h1>Student Event Co-Ordinator</h1>
            <p>Mr. Jitendra Reddy: 6363851732</p>
            <p>Mr. Akash Hiremath: 7795422212</p>
          </div>
          <div className='flex flex-col justify-center items-center mb-4 text-white'>
            <h1>Faculty Event Co-Ordinator</h1>
            <p>Prof. Khushi Singala: 8549001111</p>
          </div>
          <div className='mt-2 flex justify-center items-center'>
            <a href="https://oxfordcollege.edu.in/">
              <img src={OxfordLogo} alt="Not found" className='w-32' />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Footer />
      </div>
    </div>
  )
}

export default Contact