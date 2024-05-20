import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import axios from 'axios';
import { useNavigate } from 'react-router';
import Scanner from '../assets/WhatsApp Image 2024-05-14 at 16.48.07.jpeg';

const Register = () => {

  const [collegeName, setCollegeName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [category, setCategory] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [altPhoneNo, setAltPhoneNo] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveData = async (event) => {
    event.preventDefault();
    const data = {
      collegeName,
      teamName,
      category,
      phoneNo,
      altPhoneNo,
      transactionId,
    };
    try {
      setLoading(true);
      const res = await axios.post('/api/register', data);
      console.log(res);
      console.log("data saved successfully");
      navigate('/');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loader />

  return (
    <div>
      <div className='mb-2'>
        <NavBar />
      </div>
      <div className='flex justify-center items-center border-blue-500'>
        <form onSubmit={saveData} className='w-full border-2 border-sky-500 p-4 m-4 rounded-md md:w-1/2 lg:w-1/3'>
          <div>
            <label htmlFor="collegeName" className='text-xl font-lobster flex flex-col'>College Name</label>
            <input type="text" placeholder='Enter College Name' id='collegeName' name='collegeName' value={collegeName} onChange={(event) => { setCollegeName(event.target.value) }} className='w-full p-2 m-2 border-black rounded-md' required/>
          </div>
          <div>
            <label htmlFor="teamName" className='text-xl font-lobster flex flex-col'>Team Name</label>
            <input type="text" placeholder='Enter Team Name' id='teamName' name='teamName' value={teamName} onChange={(event) => { setTeamName(event.target.value) }} className='w-full p-2 m-2 border-black rounded-md' required />
          </div>
          <div>
            <label htmlFor="phoneNo" className='text-xl font-lobster flex flex-col'>Phone Number</label>
            <input type="text" placeholder='Enter Phone Number' id='phoneNo' name='phoneNo' value={phoneNo} onChange={(event) => { setPhoneNo(event.target.value) }} className='w-full p-2 m-2 border-black rounded-md' required pattern="\d{10}" title="Phone number must be 10 digits"/>
          </div>
          <div>
            <label htmlFor="altPhoneNo" className='text-xl font-lobster flex flex-col'>Alternate Phone Number</label>
            <input type="text" placeholder='Enter Alternate Phone Number' id='altPhoneNo' name='altPhoneNo' value={altPhoneNo} onChange={(event) => { setAltPhoneNo(event.target.value) }} className='w-full p-2 m-2 border-black rounded-md' required pattern="\d{10}" title="Alternate phone number must be 10 digits"/>
          </div>
          <div>
            <label htmlFor="choice" className='text-xl font-lobster flex flex-col'>Select an option</label>
            <select name="choice" id="choice" value={category} onChange={(event) => { setCategory(event.target.value) }} className='w-full p-2 m-2 border-black rounded-md' required>
              <option value=''>Select an Option</option>
              <option value="Solo Dance">Solo Dance</option>
              <option value='Group Dance'>Group Dance</option>
            </select>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-xl text-black mb-2'>Pay Through UPI ID or QR Code</h1>
            <p className='text-md text-black'>8722989080prashu@axl</p>
            <img src={Scanner} alt="Not Found" className='w-[50%] h-96' />
            <p className='text-black text-lg'>Note: While Paying Please Mention Your Team Name.</p>
          </div>
          <div>
            <label htmlFor="transaction" className='text-xl font-lobster flex flex-col'>Transaction Id</label>
            <input type="text" placeholder='Please input your transaction id for registartion' id='transaction' name='transaction' value={transactionId} onChange={(event) => { setTransactionId(event.target.value) }} className='w-full p-2 m-2 border-black rounded-md' required/>
          </div>
          <div>
            <button className='bg-sky-500 text-black w-full border-black rounded p-2 m-2'>Register</button>
          </div>
        </form>
      </div>
      <div className='mt-2'>
        <Footer />
      </div>
    </div>
  )
}

export default Register