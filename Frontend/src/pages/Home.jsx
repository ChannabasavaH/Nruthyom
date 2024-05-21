import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import image from '../assets/IMG-20240515-WA0003.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <NavBar />
      </div>
      <div className="relative flex-grow flex flex-col justify-between">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="relative z-10 p-4 text-center">
          <h1 className="text-yellow-400 text-4xl sm:text-4xl md:text-4xl m-2 mb-2 sedan-sc-regular ">Nruthyom 2K24</h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl m-2 font-medium">First Ever Biggest Inter-College Dance Competition Held In Oxford College.</p>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-4 text-center">
          <p className="text-white text-xl sm:text-2xl md:text-3xl m-2 font-semibold">To Register</p>
          <Link to={'/api/register'} className="text-blue-500 text-md sm:text-lg md:text-xl font-medium">Click Here</Link>
          <p className="text-white text-xl sm:text-2xl md:text-3xl m-2 font-medium">Contact of Event Managers</p>
          <Link to={'/api/contact'} className="text-blue-500 text-md sm:text-lg md:text-xl font-medium">Click Here</Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
