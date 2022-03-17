import React from 'react'
import { useHistory } from 'react-router'
const Footer = () => {
    let history = useHistory();
  return (
    <>
    <footer className="text-center text-white" style={{backgroundColor:" rgb(5, 46, 112)"}}>
  <div className="container p-6">
    <div className="">
      <p className="flex justify-center items-center">
        <span className="mr-4">Register for free</span>
        <button onClick={()=>{history.push('/home')}} type="button" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          Sign up!
        </button>
      </p>
    </div>
  </div>

  <div className="text-center p-4" style={{backgroundColor: "rgb(7, 67, 124)"}}>
    © 2022 Copyright: 
    <a className="text-white" href="/home">ExamPrep private limited</a>
  </div>
</footer>
    </>
  )
}

export default Footer