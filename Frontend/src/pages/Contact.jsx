import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className='"flex flex-col min-h-screen"'>
      <div className='mb-2'>
        <NavBar />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-semibold m-2'>Contact Information</h1>
        <div className='flex flex-col justify-center items-center mb-4'>
          <h1>Event Manager</h1>
          <p>Mr. Shashank: 9019331203</p>
          <p>Miss. Bindu: 7892344071</p>
        </div>
        <div className='flex flex-col justify-center items-center mb-4'>
          <h1>Event Co-Manager</h1>
          <p>Mr. Akash: 7795422212</p>
          <p>Miss. Sunita: 8792157192</p>
        </div>
        <div className='flex flex-col justify-center items-center mb-4'>
          <h1>Staff Coordinate</h1>
          <p>Prof Manpreeth: 9902993111</p>
        </div>
      </div>
      <div className='mt-2'>
        <Footer />
      </div>
    </div>
  )
}

export default Contact