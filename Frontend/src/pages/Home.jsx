import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import image from '../assets/nruthyomBackgroundImg2.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <NavBar />
      </div>
      <div className="flex-grow bg-cover bg-center flex justify-center items-end"
        style={{ backgroundImage: `url(${image})` }}
      >
       <div className="flex flex-col justify-center items-center h-full p-4 text-center">
          <p className="text-white text-md sm:text-2xl md:text-3xl m-2 font-semibold">To Register</p>
          <Link to={'/api/register'} className="text-blue-500 text-md sm:text-lg md:text-xl font-medium">Click Here</Link>
          <p className="text-white text-md sm:text-2xl md:text-3xl m-2 font-medium">Contact of Event Managers</p>
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
