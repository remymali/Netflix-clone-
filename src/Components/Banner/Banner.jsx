import React, { useEffect, useState } from 'react'
import { api_Key,img_url } from '../constants/constants'
import './Banner.css'
import axios from "../../axios"
function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{

    axios.get(`trending/all/week?api_key=${api_Key}&language=en-US`).then((response)=>{
      setMovie(response.data.results[2])
    })
  },[])
  
  
  return (
    <div style={{backgroundImage:`url(${movie?img_url+movie.backdrop_path:""})`}}
     className='banner'>

      <div className='Content'>
        <h1 className='title'>{movie?movie.title:" "}</h1>
        <div className='banner_button'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <div className='discription'>
       {movie?movie.overview:" "}
        </div>
        <div className="fade_bottom"></div>

      </div>
    </div>
  )
}

export default Banner
