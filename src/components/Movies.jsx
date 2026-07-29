import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';
function Movies({Watchlist,handleAddToWatchList,handleRemoveFromWatchList}) {
  const[movies,setMovies]=useState([])
  const[pgno,setpgno]=useState(1);
  const handlePrev=()=>{
    if(pgno==1) return;
    setpgno(pgno-1);
  }
  const handleNext=()=>{
    setpgno(pgno+1);
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=fb7bb23f03b6994dafc674c074d01761&language=en-US&page=${pgno}`).then(function(res){
      console.log(res.data.results)
      setMovies(res.data.results)
    }
  )
  },[pgno])
  return (
    <div>
        <div className='text-2xl font-bold text-center'>Trending Movies</div>
        <div className='flex flex-wrap justify-start gap-4'>
           {movies.map((movieObj) => {
          return <MovieCard Watchlist={Watchlist} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.title} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>
})}
       </div>
       <Pagination pgno={pgno} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  )
}

export default Movies