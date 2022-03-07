import React from 'react';
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom';
const Home = () => {
      let history=useHistory();
  return <>
  <Navbar></Navbar>
  <h2 style={{textAlign:"center",fontFamily:'Arial, "Helvetica Neue", Helvetica, sans-serif'}}>GATE past year question papers</h2>
    <div className='gate'>
        <div className='card'>
            <h3>GATE CSE</h3>
            <p>All Last Year Question Papers</p>
            <div className='card-button'><button onClick={()=>{history.push('/cse')}}>Go</button></div>
        </div>
        <div className='card'>
            <h3>GATE ECE</h3>
            <p>All Last Year Question Papers</p>
            <div className='card-button'><button>Go</button></div>
        </div>
        <div className='card'>
            <h3>GATE EE</h3>
            <p>All Last Year Question Papers</p>
            <div className='card-button'><button>Go</button></div>
        </div>
        <div className='card'>
            <h3>GATE CE</h3>
            <p>All Last Year Question Papers</p>
            <div className='card-button'><button>Go</button></div>
        </div>
        <div className='card'>
            <h3>GATE ME</h3>
            <p>All Last Year Question Papers</p>
            <div className='card-button'><button>Go</button></div>
        </div>
        <div className='card'>
            <h3>GATE PI</h3>
            <p>All Last Year Question Papers</p>
            <div className='card-button'><button>Go</button></div>
        </div>
        <div className='card'>
            <h3>GATE IN</h3>
            <p>All Last Year Question Papers</p>
            <div className='card-button'><button>Go</button></div>
        </div>
    </div>
    <h2 style={{textAlign:"center",fontFamily:'Arial, "Helvetica Neue", Helvetica, sans-serif'}}>JEE past year question papers</h2>
    <div className='jee'>
        <div className='card'>
            <h3>JEE Mains</h3>
            <p>All Last Year Question Papers</p>
            <div className='card-button'><button>Go</button></div>
        </div>
        <div className='card'>
            <h3>JEE Advanced</h3>
            <p>All Last Year Question Papers</p>
            <div className='card-button'><button>Go</button></div>
        </div>
    </div>
  </>;
};

export default Home;
