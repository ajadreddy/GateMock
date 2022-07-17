import React from 'react'
import { useHistory } from 'react-router';
import Footer from '../Footer';
const LandingPage = () => {
  let history=useHistory();
  return (
    <>
    <div>
    
      <div className='grid place-content-center'><img src="./ExamPREP.png" alt="" className='h-60'/></div>
      
      <div className="text-5xl grid place-content-center"><h1>ExamPREP.Com</h1></div>
      <div className="text-2xl grid place-content-center"><h2>Your Exam Our Responsibility</h2></div>
      <div className='flex p-10 place-content-center'>
        <div className='p-6 mr-24 text-4xl'>
          <h1>Give mock tests before </h1>
          <h1>writing your Target exam.</h1>
          <div className='mt-16'><button onClick={()=>{history.push('/home')}} className=' pr-3 pl-3 pt-1 pb-1 text-lg bg-sky-500 rounded-sm text-white'>Signup for mock tests</button></div>
        </div>
        <div><img className='h-96 ' src="./qz.gif" alt="" /></div>
      </div>
      <div className='flex p-10 place-content-center'>
        <div><img className='h-96 mr-24' src="./qz2.gif" alt="" /></div>
        <div className='p-6 text-4xl'>
          <h1>All types of previous year JEE </h1>
          <h1>and GATE question papers</h1> 
          <h1>are available here!</h1>
        </div>
      </div>
    </div>
    <div className='bg-sky-600 flex p-10 font-semibold text-white '>
        <div className='p-5 mr-80 text-3xl'>
            <h1>Start giving mocks </h1>
            <h1>with ExamPREP</h1>
            <div className='mt-3'><button onClick={()=>{history.push('/home')}} className=' pr-3 pl-3 pt-1 pb-1 text-lg bg-slate-200 rounded text-sky-600'>Signup for mock tests</button></div>
        </div>
        <div className='p-5'>
          <h1 className='text-xl'>Exam categories</h1>
          <h1 className='text-center text-6xl p-4'>25+</h1>
        </div>
        <div className='p-5'>
          <h1 className='text-xl'>Question papers</h1>
          <h1 className='text-center text-6xl p-4'>300+</h1>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default LandingPage