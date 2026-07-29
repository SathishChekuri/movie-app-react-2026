import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import WatchList from './components/WatchList'
import Movies from './components/Movies'
import Banner from './components/Banner'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  let[Watchlist,setWatchList]=useState([])
  let handleAddToWatchList=(movieObj)=>{
    let newWatchList=[...Watchlist,movieObj]
    setWatchList(newWatchList)
    console.log(newWatchList);
  }
  let handleRemoveFromWatchList=(movieObj)=>{
    let filteredWatchList=Watchlist.filter((movie)=>{
      return movie.id!==movieObj.id
    })
    setWatchList(filteredWatchList);
    console.log(filteredWatchList);
  }
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route 
        path="/" 
        element={
        <> 
        <Banner/> <Movies Watchlist={Watchlist} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>
        </>}
        />
        <Route path='/WatchList' element={<WatchList/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}
//https://api.themoviedb.org/3/movie/popular?api_key=fb7bb23f03b6994dafc674c074d01761&language=en-US&page=2
export default App
