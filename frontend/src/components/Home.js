import React from 'react';
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
const Home = () => {

      let history=useHistory();
      
  return <>
  <Navbar></Navbar>
  <>
      <h2 className="text-xl font-semibold text-center">GATE past year question papers</h2>
    <div className=" flex flex-wrap justify-center">
        <div className="block p-6 m-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Gate CSE</h5>
            <p className="text-gray-700 text-base mb-4">
            All Last Year Question Papers
            </p>
            <button onClick={()=>{history.push('/cse')}} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Go</button>
        </div>
        <div className="block p-6 m-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Gate ECE</h5>
            <p className="text-gray-700 text-base mb-4">
            All Last Year Question Papers
            </p>
            <button onClick={()=>{history.push('/ece')}} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Go</button>
        </div>
        <div className="block p-6 m-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Gate EE</h5>
            <p className="text-gray-700 text-base mb-4">
            All Last Year Question Papers
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Go</button>
        </div>
        <div className="block p-6 m-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Gate ME</h5>
            <p className="text-gray-700 text-base mb-4">
            All Last Year Question Papers
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Go</button>
        </div>
        <div className="block p-6 m-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Gate CE</h5>
            <p className="text-gray-700 text-base mb-4">
            All Last Year Question Papers
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Go</button>
        </div>
        <div className="block p-6 m-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Gate CSE</h5>
            <p className="text-gray-700 text-base mb-4">
            All Last Year Question Papers
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Go</button>
        </div>
        <div className="block p-6 m-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Gate CSE</h5>
            <p className="text-gray-700 text-base mb-4">
            All Last Year Question Papers
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Go</button>
        </div>
        <div className="block p-6 m-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Gate CSE</h5>
            <p className="text-gray-700 text-base mb-4">
            All Last Year Question Papers
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Go</button>
        </div>
    </div>
    <h2 className="text-xl font-semibold text-center">JEE past year question papers</h2>
    <div className=" flex flex-wrap justify-center">
        <div className="block p-6 m-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">JEE Mains</h5>
            <p className="text-gray-700 text-base mb-4">
            All Last Year Question Papers
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Go</button>
        </div>
        <div className="block p-6 m-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">JEE Advanced</h5>
            <p className="text-gray-700 text-base mb-4">
            All Last Year Question Papers
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Go</button>
        </div>
    </div>
    
    </>
    <Footer></Footer>
  </>;
};

export default Home;
