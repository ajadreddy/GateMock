import React,{useState,useEffect} from 'react'
import axios from 'axios'
const ApiTest = () => {
    const [data,setData] = useState([]);
    const fetchData = () => {
        axios.get('https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple#downloadJSON=true')
        .then((res) => {
            console.log(res.data)
            setData(res.data.results)
            
        }) 
        .catch((err) => {
            console.log(err)
        });
    };
    useEffect(()=>{
        fetchData();
    },[]);

  return (
    <div>
        {
            data.map((ele)=>{
                return(
                    <h1>{ele.question}</h1>
                    // console.log(ele)
                )
            })
        }
    </div>
  )
}

export default ApiTest