import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-screen h-10 bg-black flex items-center'>
      <div className='flex justify-start items-center'>
        <Link to={'/'}>
        <h2 className='text-white p-2 font-lobster text-lg'>Home</h2>
        </Link>
        <Link to={'/api/about'}>
        <h2 className='text-white p-2 font-lobster text-lg'>About</h2>
        </Link>
        <Link to={'/api/register'}>
        <h2 className='text-white p-2 font-lobster text-lg'>Register</h2>
        </Link>
        <Link to={'/api/contact'}>
          <h2 className='text-white p-2 text-lg'>Contact</h2>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
