import axios from 'axios'
import React, { useState } from 'react'

function Test() {
  const [state,setState]=useState([])
  return (
    <div>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
          setState(res.data)
        })
      }}>Click</button>
      
       { state.map((obj,index)=>{    
           return(
          <div key={index}>
          <h1 style={{color:'white'}}>{obj.title}</h1>
          </div>
          
       )})
      }
      
      
    </div>
  )
}

export default Test