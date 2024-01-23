import React from 'react';
import { useHistory } from "react-router-dom";

const Navbar = () => {

  let history = useHistory();

  
  return <>
      <div className='flex bg-blue-600 h-12'>
        <div className='p-2 font-semibold text-white text-2xl'><a href="/home">Mock Test</a></div>
        <div className='ml-auto'>
          <button className=' m-1 p-2 text-l rounded bg-gray-50	' onClick={()=>{history.push("/login")}}>
            Login
          </button>
        </div>
        <div className='ml-auto'>
          <button className=' m-1 p-2 text-l rounded bg-gray-50	' onClick={()=>{history.push("/dashboard")}}>
            Dashboard
          </button>
        </div>
      </div>
  </>;
}; 

export default Navbar;
