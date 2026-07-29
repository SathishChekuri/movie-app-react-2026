import React from 'react'
import image from '../image.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4 text-blue-500 text-3xl font-bold'>
        <img className='w-[50px]' src={image} alt="" />
        <Link to="/" >Home</Link>
        <Link to="/WatchList" >WatchList</Link>
    </div>
  )
}

export default Navbar