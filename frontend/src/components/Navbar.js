import React from 'react';
import Avatar from 'react-avatar';
import { useHistory } from "react-router-dom";

const Navbar = () => {

  let history = useHistory();

  const logout =()=>{
    localStorage.clear();
    window.location.href = '/';
  }
  return <>
      <div className='flex bg-blue-600 h-12'>
        <div className='p-2 font-semibold text-white text-2xl'><a href="/home">Mock Test</a></div>
        <div className='p-2 '>
          {/* <button></button> */}
          <button className='absolute right-20 w-20' onClick={()=>{history.push('/profile')}}>
            <Avatar color='white'  size='35' round='50px'/>
          </button>
          <button className='absolute right-2 w-20 px-2 py-1 text-base font-semibold text-white bg-sky-400 hover:bg-sky-500 rounded' onClick={logout}>Logout</button>
        </div>
    </div>
  </>;
}; 

export default Navbar;
