import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import image from '../assets/IMG-20240515-WA0004.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-2">
        <NavBar />
      </div>
      <div
        className="flex-grow bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold m-2 kanit-semibold-italic">Information About Nruthyom</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold opacity-80 my-2">Rules</h2>
        <ol className="text-lg md:text-xl lg:text-2xl my-2 mx-4 list-disc md:mx-8 lg:mx-16">
          <li className="m-1 font-semibold">It is a group and solo dance competition.</li>
          <li className='m-1 font-semibold'>Participants must be from the same college.</li>
          <li className='m-1 font-semibold'>Only one solo and one group can participate from each college.</li>
          <li className='m-1 font-semibold'>Minimum of 5 and maximum of 9 peoples allowed for group dance.</li>
          <li className='m-1 font-semibold'>Duration of performance for solo is maximum 3 minutes.</li>
          <li className='m-1 font-semibold'>Duration  of performance for group Is maximum 5 minutes.</li>
          <li className='m-1 font-semibold'>No color , fire and water act allowed.</li>
          <li className='m-1 font-semibold'>College id cards are mandatory.</li>
          <li className='m-1 font-semibold'>Costumes and properties are not provided by the management.</li>
          <li className='m-1 font-semibold'>The decision of the judges will be last and final.</li>
          <li className='m-1 font-semibold'>Group - Rs.350 & Solo - Rs.150</li>
        </ol>
        <Link to="/" className="text-blue-500 hover:underline mt-4">Back to Home</Link>
      </div>
      <div className="mt-2">
        <Footer />
      </div>
    </div>
  );
}

export default About;
