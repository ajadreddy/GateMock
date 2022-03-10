import React from 'react'
import './test1.css'
import { useState } from 'react'
import { questions } from '../Data'

const Test1 = () => {

    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score,setScore] = useState(0);
    const [selectedOption,setSelectedOption] = useState(null);

    const handleAnswerOptionClick = (selectedOption)=>{

        if(selectedOption){
            if(selectedOption.isCorrect){
                setScore(score+1);
            }   
        }
        const nextQuestion = currentQuestion+1;
        if(nextQuestion<questions.length){
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowScore(true);
        }
    }
    const savenext =(answerOption)=>{
        setSelectedOption(answerOption)
    }
    const getButtonsUsingForLoop = (num) => {
        const array = []
        for(var i = 1; i <= num; i++){
          array.push(<button>{i}</button>)
        }
        return array
    }
    
  return (
    <div className="test1">
    
    {showScore?(
        <div>You scored {score} out of {questions.length}</div>
    ):(
        <>
        <div className="test1-timer section1"><h2>Time left : 2:32:11</h2> </div>
        <div className="section2">
            <div className="test1-qn-type"><p>Type : MCQ/NAT/MSQ</p></div>
            <div className="test1-points">
                <p>Points : +2</p>
                <p>Negative points : -1</p>
            </div>
        </div>
        <div className="section3">
            <div className="test1-qn-no">Q:{currentQuestion +1}</div>
            <div className="test1-qn">
                <p>{questions[currentQuestion].questionText}</p>
                <div className="test1-qn-options">
                    {questions[currentQuestion].answerOptions.map((answerOption)=>(
                        <div onClick={()=>savenext(answerOption)}>
                            <input name="a" type="radio" />{answerOption.answerText} <br />
                        </div>
                    ))}
                </div>
            </div>
            <div className="test1-navigate-qn-bts">
            {getButtonsUsingForLoop(questions.length)}
            {/* {questions[currentQuestion].answerOptions.map(()=>(
                <div>
                    <button>{currentQuestion+1}</button>
                </div>
            ))} */}
            </div>  
        </div>
    <div className="section4">
        <div className="test1-save"><button onClick={()=>handleAnswerOptionClick(selectedOption)}>Save n Next</button></div>
        <div className="test1-submit"><button>Submit</button></div>
    </div>
    </>
    )}
    {/* <div className="section2">
        <div className="test1-qn-type"><p>Type : MCQ/NAT/MSQ</p></div>
        <div className="test1-points">
            <p>Points : +2</p>
            <p>Negative points : -1</p>
        </div>
    </div>
    <div className="section3">
        <div className="test1-qn-no">Q:{currentQuestion +1}</div>
        <div className="test1-qn">
            <p>{questions[currentQuestion].questionText}</p>
            <div className="test1-qn-options">
                {questions[currentQuestion].answerOptions.map((answerOption)=>(
                    <div>
                        <input id={currentQuestion} type="radio" />{answerOption.answerText} <br />
                    </div>
                ))}
                
            </div>
        </div>
        <div className="test1-navigate-qn-bts">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
        </div>
    </div>
    <div className="section4">
        <div className="test1-save"><button onClick={()=>handleAnswerOptionClick()}>Save n Next</button></div>
        <div className="test1-submit"><button>Submit</button></div>
    </div> */}
    
    </div>
  )
}

export default Test1
