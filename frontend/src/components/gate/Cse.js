import {React} from 'react';
import Navbar from '../Navbar';
import { useHistory } from "react-router-dom";
import Footer from '../Footer';
// import { useState } from 'react';
const Cse = () => {

    let history = useHistory();

    const n=10;
    let year=2022;
    const lst=[];
    for (let i = 0; i < n; i++) {
        lst.push(
            <div className="block p-6 m-6 rounded-lg shadow-lg bg-white max-w-sm" >
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">GATE CSE {year}</h5>
                <h2 className='text-base mb-4'>This test contains 65 Questions</h2>
                <button onClick={()=>{history.push('/test4')}} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Take Test
                </button>
            </div>
        ) 
        year=year-1;  
    }
    

  return <>
    <Navbar></Navbar>
    <div className='flex flex-wrap justify-center'>{lst}</div>
    
    <Footer></Footer>
  </>;
};

export default Cse;
