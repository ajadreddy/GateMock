import React from 'react'
import { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const Test5 = () => {
    let history = useHistory();

    const [items,setItems] = useState(null);

    useEffect(() => {
        const fun = async (e) => {
        const response = await fetch(
            "https://opentdb.com/api.php?amount=50&category=18&type=multiple",
            {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            }
        );
        const json = await response.json();
        setItems(json);
        };
        fun();
    }, []);

    

  return (
    <>
    {
    items && items.results.map((item)=>{
        return(
            <div>
                {item.question}
            </div>
        )
    })
    }
    </>
  )
}

export default Test5