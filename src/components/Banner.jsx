import React from 'react'

import image from '../image.png'

import { useState, useEffect } from 'react';

import axios from "axios";

function Banner() {

  const [movies, setMovies] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {

  axios.get(

  "https://api.themoviedb.org/3/movie/popular?api_key=fb7bb23f03b6994dafc674c074d01761&language=en-US&page=1"

      )

    .then((res) => {

      setMovies(res.data.results.slice(0, 5));

    });

      }, []);

      const nextMovie=()=>{

        setCurrentIndex((prev)=>(prev+1)%movies.length);

      }

      const prevMovie=()=>{

      setCurrentIndex((prev)=>(prev==0)?movies.length-1:prev-1);

      }

  return (
       <div

        className="h-[30vh] md:h-[75vh] bg-cover bg-center flex items-end bg-gray-900 p-6 rounded-2xl"

        style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[currentIndex]?.backdrop_path})`,
        backgroundSize: "70%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        }}
        

        >

      <button onClick={prevMovie} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70">

        ❮

        </button>

        <button onClick={nextMovie} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70">

         ❯

        </button> 
        //text on banner
        <div className='text-white text-4xl  font-extrabold w-full p-2 text-center bg-gray-900/60'>{movies[currentIndex]?.title}</div></div>

  )

}



export default Banner