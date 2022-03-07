import React from 'react';


const Navbar = () => {

  const logout =()=>{
    localStorage.clear();
    window.location.href = '/';
  }
  return <>
      <div className='nav'>
        <div><a href="/">Mock Test</a></div>
        <div className='nav-btn' >
          <button onClick={logout} >Logout</button>
        </div>
        
      </div>
  </>;
};

export default Navbar;
