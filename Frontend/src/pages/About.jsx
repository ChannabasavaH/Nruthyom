import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import image from '../assets/Untitled design.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <NavBar />
      </div>
      <div
        className="flex-grow bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold m-2 kanit-semibold-italic text-white">Information About Nruthyom</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold opacity-80 my-2 text-white">Rules</h2>
        <ol className="text-lg md:text-xl lg:text-2xl my-2 mx-4 list-disc md:mx-8 lg:mx-16 text-white">
          <li className="m-1 font-semibold">Solo and group competition.</li>
          <li className='m-1 font-semibold'>Entry fee for solo is 300/- and for group is 500/-.</li>
          <li className='m-1 font-semibold'>Minimum of 4 and maximum of 8 participants allowed for group dance.</li>
          <li className='m-1 font-semibold'>Duration of performance must be, maximum of 5 minutes.</li>
          <li className='m-1 font-semibold'>No color, fire and water act allowed.</li>
          <li className='m-1 font-semibold'>Last Date of Registration and music to be submitted on or before 14th december.</li>
          <li className='m-1 font-semibold'>Group:
            <ul>
              <li className='m-1 font-semibold'>1st Prize: 3000/- with Throphy</li>
              <li className='m-1 font-semibold'>2nd Prize: Throphy</li>
              <li className='m-1 font-semibold'>3rd Prize: Throphy</li>
            </ul>
          </li>
          <li className='m-1 font-semibold'>Solo:
          <ul>
              <li className='m-1 font-semibold'>1st Prize: 2000/- with Throphy</li>
              <li className='m-1 font-semibold'>2nd Prize: Throphy</li>
              <li className='m-1 font-semibold'>3rd Prize: Throphy</li>
            </ul>
          </li>
          <li className='m-1 font-semibold'>College ID Cards are mandatory.</li>
        </ol>
        <Link to="/" className="text-blue-500 hover:underline mb-2">Back to Home</Link>
      </div>
      <div className="mt-2">
        <Footer />
      </div>
    </div>
  );
}

export default About;
