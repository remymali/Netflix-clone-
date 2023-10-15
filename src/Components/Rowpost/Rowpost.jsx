import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from "../../axios"
import { api_Key, img_url } from '../constants/constants'
import './Rowpost.css'
function Rowpost(props) {
  const [discover, setDiscover] = useState([])
  const [videoId, setVideoId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setDiscover(response.data.results)
    }).catch((error) => {
      // alert('Network Error')
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${api_Key}&language=en-US`).then(res=> {
      console.log(id)
      if (res.data.results.length !== 0)
      {
        setVideoId(res.data.results[0])
      }
      else
      {
        alert('Array empty.')
      console.log("Array empty.")
      }
    })
  }
  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className="poster">
        {
          discover.map((item) =>
            <img onClick={() => handleMovie(item.id)} className={`${props.isSmall ? 'small_poster' : 'poster_img'}`} src={`${img_url + item.backdrop_path}`} alt="" />
          )
        }


      </div>
      {videoId && <YouTube opts={opts} videoId={videoId.key}  />}
    </div>

  )
}

export default Rowpost
