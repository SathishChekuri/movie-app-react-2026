import React from 'react'

function MovieCard({Watchlist,movieObj,poster_path,name,handleAddToWatchList,handleRemoveFromWatchList}) {
  function isContains(movieObj){
    for(let i=0;i<Watchlist.length;i++){
      if(Watchlist[i].id==movieObj.id){
        return true;
      }
    }
    return false;
  }
  return (
    <div className='h-[40vh] w-[200px] bg-centre bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

      {isContains(movieObj)?<div onClick={()=>(handleRemoveFromWatchList(movieObj))} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
        &#128151;
        </div>
      :(<div onClick={()=>(handleAddToWatchList(movieObj))} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
        &#9825;
        </div>)}
      
    <div className='text-white text-xi w-full p-2 text-center bg-gray-900/60'>
      {name}
    </div>
    </div>
    
  )
}

export default MovieCard