import React from 'react'
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
        // else{
        //     setShowScore(true);
        // }
    }
    const savenext =(answerOption)=>{
        setSelectedOption(answerOption)
    }
    
    
    // const startingMinutes =10;
    // let time = startingMinutes * 60;
    // const updatecountDown = () => {
    //     const minutes = Math.floor(time/60);
    //     const seconds = time % 60;
        


    //     time--;
    // }
    // setInterval(updatecountDown,1000);


    let count =10;
    const countDown =()=>{
        count = count-1;
    }
    setInterval(countDown,1000)

  return (
    <>
    {showScore?(
        <div className='grid place-content-center h-96'>
            <h2 className='text-2xl mb-2'>You scored {score} out of {questions.length}</h2>
            <div>
                <p>Oka 1000 paytm kottu </p>
                <p>lekapothe ee markulu mee ayyaku pamputha</p>
            </div>
            <div className='grid grid-cols-2 place-content-center'>
                <button onClick={()=>{history.push('/')}} className='w-23 px-2 py-1 text-base font-semibold text-white border-2 bg-sky-400 hover:bg-sky-500 rounded'>Home</button>
                <button className='w-23 px-2 py-1 text-base font-semibold text-white border-2 bg-slate-900 hover:bg-slate-500 rounded'>Link for Payment</button>
            </div>
        </div>
        
    ):(
        <>
        <div className=' bg-blue-600 h-10 p-2'>
        <h2 className='absolute text-white right-2'>Time Left : {count}</h2>
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
                <div className='p-5 flex flex-wrap justify-center'>
                    <h2 className='p-5 '>Answered</h2>
                    <h2 className='p-5'>Mark for review</h2>
                    <h2 className='p-5'>Not visited</h2>
                    <h2 className='p-5'>Not Answered</h2>
                </div>
                <div className='h-96'>
                    {questions.map((item,i)=>{
                        return(
                            <>
                            <button onClick={()=>setCurrentQuestion(i)} className='ml-5 mb-5 w-7 bg-red-500 text-slate-50 border-black-400 border-2 rounded-full'>{i+1}</button>
                            </>
                        ) 
                    })}
                </div>
                
            </div>
        </div>
        <div className='flex  p-5 '>
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