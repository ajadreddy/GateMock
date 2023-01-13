import React from 'react'
import { useState } from 'react';
const Calculator = () => {
  const [string,setString] = useState('');
  const [flag,setFlag] = useState(true);
  const add =(val) => {
    setString(string+val);
  }
  const clear = () => {
    setString('');
  }
  const del = () => {
    setString(string.substring(0,string.length-1));
  }
  const display = () => {
    setString(eval(string))
  }
  const calc = () => {
    if(flag){
      setFlag(false);
    }
    else{
      setFlag(true);
    }
  }

  return (
    <div className='calculator'>
        <button className='p-1 m-1 rounded bg-slate-500 text-white' onClick={()=>calc()}>Calculator</button>
        {
      flag ? (<></>)
      :
      (
        <>
        <div className="App">
          <div className='screen'> 
              <h2>
              {string}
              </h2>
          </div>
          <div >
              <div className='prime-btns'>
                <div onClick={()=>clear()} >Clear</div>
                <div onClick={()=>del()}>Delete</div>
              </div>
              <div className='button-section'>
                <div className='number-btns'>
                  <div onClick={()=>add('9')}>9</div>
                  <div onClick={()=>add('8')}>8</div>
                  <div onClick={()=>add('7')}>7</div>
                  <div onClick={()=>add('6')}>6</div>
                  <div onClick={()=>add('5')}>5</div>
                  <div onClick={()=>add('4')}>4</div>
                  <div onClick={()=>add('3')}>3</div>
                  <div onClick={()=>add('2')}>2</div>
                  <div onClick={()=>add('1')}>1</div>
                  <div onClick={()=>add('.')}>.</div>
                  <div onClick={()=>add('0')}>0</div>
                </div>
                <div className='arithmetic-btns'>
                  <div onClick={()=>add('/')}>/</div>
                  <div onClick={()=>add('*')}>x</div>
                  <div onClick={()=>add('+')}>+</div>
                  <div onClick={()=>add('-')}>-</div>
                </div>
              </div>
              <div className='submit-btn'>
                <div onClick={()=>display()}>=</div>
              </div>
          </div>
      </div>
      </>
      )
    }
    </div>
  )
}

export default Calculator