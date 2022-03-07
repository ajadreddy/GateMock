import React from 'react';
import Navbar from '../Navbar';
import { useHistory } from "react-router-dom";
const Cse = () => {

    let history = useHistory();

  return <>
    <Navbar></Navbar>
    <div className='gate'>
        <div className='card'>
            <h3>GATE CSE 2022</h3>
            <div className='card-button'><button onClick={()=>{history.push('/exam')}}>Take Test</button></div>
        </div>
        <div className='card'>
            <h3>GATE CSE 2021</h3>
            <div className='card-button'><button>Take Test</button></div>
        </div>
        <div className='card'>
            <h3>GATE CSE 2020</h3>
            <div className='card-button'><button>Take Test</button></div>
        </div>
        <div className='card'>
            <h3>GATE CSE 2019</h3>
            <div className='card-button'><button>Take Test</button></div>
        </div>
        <div className='card'>
            <h3>GATE CSE 2018</h3>
            <div className='card-button'><button>Take Test</button></div>
        </div>
        <div className='card'>
            <h3>GATE CSE 2017</h3>
            <div className='card-button'><button>Take Test</button></div>
        </div>
        <div className='card'>
            <h3>GATE CSE 2016</h3>
            <div className='card-button'><button>Take Test</button></div>
        </div>
        <div className='card'>
            <h3>GATE CSE 2015</h3>
            <div className='card-button'><button>Take Test</button></div>
        </div>
        <div className='card'>
            <h3>GATE CSE 2014</h3>
            <div className='card-button'><button>Take Test</button></div>
        </div>
    </div>
  </>;
};

export default Cse;
