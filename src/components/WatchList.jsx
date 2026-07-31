import React, { useEffect, useState } from 'react'
import hero from '../assets/hero.png'
import genreids from '../Utility/genre'
function WatchList({Watchlist,setWatchList,handleRemoveFromWatchList}) {
  const [Search,setSearch]=useState("");
  const [genreList,setGenreList]=useState(['All Genres'])
  const [currGenre,setCurrGenre]=useState('All Genres')

  let handleSearch=(e)=>{
    setSearch(e.target.value);
  }

  let handleFilter=(genre)=>{
    setCurrGenre(genre)
  }
  let sortIncreasing=()=>{
    let sortedInc=Watchlist.sort((movieA,movieB)=>{
      return movieA.vote_average-movieB.vote_average
    })
    setWatchList([...sortedInc])
  }
  let sortDecreasing=()=>{
    let sortedDec=Watchlist.sort((movieA,movieB)=>{
      return movieB.vote_average-movieA.vote_average
    })
    setWatchList([...sortedDec])
  }
  useEffect(()=>{
      let temp=Watchlist.map((movieObj)=>{
        return genreids[movieObj.genre_ids[0]]
      })
      temp=new Set(temp)
      setGenreList(['All Genres',...temp])
  },[Watchlist])
  return (
    <>
    <div className='flex justify-center flex-wrap m-4'>
      {genreList.map((genre)=>{

        return<div onClick={() => handleFilter(genre)} className={currGenre===genre?'flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold m-4':'flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold m-4'}>{genre}</div>
      })}
    </div>
    
    <div className='flex justify-center my-4 '>
      <input onChange={handleSearch} value={Search} type="text" placeholder="Search Movies" className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' />
    </div>
    <div className='border border-gray-200 m-8'>
      <table className='w-full text-gray-500 text-center'>
        <thead className='border border-b-2'>
            <tr>
              <th>Name</th>
              <th className='flex justify-center'>
                <div onClick={sortIncreasing} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
                <div className='p-2'>Ratings</div>
                <div onClick={sortDecreasing} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
        </thead>
        <tbody >
          {Watchlist.filter((movieObj)=>{
            if(currGenre==='All Genres'){
              return true;
            }
            else{
              return genreids[movieObj.genre_ids[0]]===currGenre;
            }
          }).filter((movieObj)=>{
            return movieObj.title.toLowerCase().includes(Search.toLowerCase())
          }).map((movieObj)=>{
            return   <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="hell0" />
                <div className='ml-20 text-align-centre'>{movieObj.title}</div>
              </td>
              <td>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              <td>{genreids[movieObj.genre_ids[0]]}</td>
              <td onClick={()=>handleRemoveFromWatchList(movieObj)} className='text-red-800'>Delete</td>
            </tr>
             })}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default WatchList