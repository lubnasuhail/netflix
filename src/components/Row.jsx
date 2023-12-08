
import React, { useState,useEffect } from 'react'
import tmdbAxioInstance from '../tmdbAxiosInstance'
import './Row.css'

function Row({title,fetchUrl}){
    const [allMovies,setAllmovies]=useState([])
    const base_url_img='https://image.tmdb.org/t/p/original'
    const fetchData=async()=>{
        const response= await tmdbAxioInstance.get(fetchUrl)
        // console.log(response.data.results)
        setAllmovies(response.data.results)
        // console.log(allmovies)
    }
    // fetchData()
    useEffect(()=>{
        fetchData()},[]
    )
    console.log(allMovies)
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='movies-row'>
            {
                allMovies?.map((item)=>(
                    <img className='movie' src={`${base_url_img}${item.backdrop_path}`} alt="no image"/> 
                ))
                }
                
        </div>
    </div>
)
}

export default Row