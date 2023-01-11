import React from 'react'
import {Circle} from 'react-shapes'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { questions } from '../Data'

const Test4 = () => {

    let history = useHistory();
     
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score,setScore] = useState(0);
    const [selectedOption,setSelectedOption] = useState(null);

    const handleAnswerOptionClick = (selectedOption)=>{
        if(selectedOption){
            if(selectedOption.isCorrect){
                setScore(score + parseInt(questions[currentQuestion].points));
            }   
            else{
                setScore(score - questions[currentQuestion].Negative)
            }
        }
        const nextQuestion = currentQuestion+1;  
        if(nextQuestion<questions.length){
            setCurrentQuestion(nextQuestion);
        }
    }

    const savenext =(answerOption)=>{
        setSelectedOption(answerOption)
    }


  return (
    <>
    {showScore?(
        <div className='grid place-content-center h-96'>
            <h2 className='text-2xl mb-2'>You scored {score} out of {questions.length}</h2>
            <div className='grid grid-cols-2 place-content-center'>
                <button onClick={()=>{history.push('/')}} className='w-23 px-2 py-1 text-base font-semibold text-white border-2 bg-sky-400 hover:bg-sky-500 rounded'>Home</button>
            </div>
        </div>
        
    ):(
        <>
        <div className=' bg-blue-600 h-10 p-2'>
        <h2 className='absolute text-white right-2'>Time Left : </h2>
        </div>
        <div className='flex'>
            <div className='w-3/4'>
                <div className='flex mt-8 p-2'>
                    <h3 className='px-2 '>Marking Scheme :</h3>
                    <h3 className='px-2 text-sky-600'>Correct Response {questions[currentQuestion].points}</h3>
                    <h3 className='px-2 text-sky-600'>Incorrect Response {questions[currentQuestion].Negative}</h3>
                </div>
                <div className='ml-5 mr-5 mt-8 border-black border-b-2'>
                    <h2 className='font-semibold '>Question {currentQuestion +1}</h2>
                    <h2 className='text-sky-600 font-semibold mb-3'>Multiple choice question</h2>
                </div>
                <div className='px-5 '>
                    <p className='font-semibold mt-3'>{questions[currentQuestion].questionText}</p>
                    <div className='' >
                        {questions[currentQuestion].answerOptions.map((answerOption)=>(
                            <div onClick={()=>savenext(answerOption)}>
                                <input className="m-3" name="a" type="radio" />{answerOption.answerText} <br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-1/4 border border-l-2 border-b-0 border-solid '>
                <div className='p-5 flex grid grid-cols-2 justify-center'>
                    <h2 className='p-5 '> <Circle r={12} fill={{color:'rgb(7, 163, 7)'}} stroke={{color:'rgb(0,0,0'}} strokeWidth={1}/> Answered </h2>
                    <h2 className='p-5'><span><Circle r={12} fill={{color:'rgb(84, 34, 202'}} stroke={{color:'rgb(0,0,0'}} strokeWidth={1}/></span> Mark for review</h2>
                    <h2 className='p-5'><span><Circle r={12} fill={{color:'rgb(255, 255, 255)'}} stroke={{color:'rgb(0,0,0'}} strokeWidth={1}/></span> Not visited</h2>
                    <h2 className='p-5'><span><Circle r={12} fill={{color:'rgb(214, 27, 27)'}} stroke={{color:'rgb(0,0,0'}} strokeWidth={1}/></span> Not Answered</h2>
                </div>
                <div className='h-96'>
                    {questions.map((item,i)=>{
                        return(
                            <>
                            <button onClick={()=>setCurrentQuestion(i)} className='ml-4 mb-4 w-7  text-black-50 border-2 border-black rounded-sm'>{i+1}</button>
                            </>
                        ) 
                    })}
                </div>
            </div>
        </div>
        <div className='flex  ml-4 '>
            <div className='w-3/4'>
                <button className=' w-23 mr-6 px-2 py-1 text-base font-semibold text-white border-2 bg-sky-400 hover:bg-sky-500 rounded' onClick={()=>handleAnswerOptionClick(selectedOption)}>SAVE AND NEXT</button>
                <button className=' w-23 mr-6 px-2 py-1 text-base font-semibold text-sky-400 border-2 border-solid border-sky-400 bg-transparent hover:bg-sky-500 hover:text-white rounded' >Mark for review and next</button>
                <button className=' w-23 mr-6 px-2 py-1 text-base font-semibold text-sky-400 border-2 border-solid border-sky-400 bg-transparent hover:bg-sky-500 hover:text-white rounded' >Clear Response</button>
            </div>
            <div className='w-1/4'>
                <button onClick={setShowScore} className=' w-10/12 ml-11 px-2 py-1 text-base font-semibold text-white border-2 bg-emerald-600 rounded'>SUBMIT TEST</button>
            </div>
        </div>
    </>
    )}
    </>
  )
}

export default Test4