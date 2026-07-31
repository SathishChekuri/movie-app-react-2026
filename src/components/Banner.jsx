import React from 'react'
import image from '../image.png'
import { useState } from 'react';
function Banner() {
  return (
    
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center  flex items-end' style={{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkHtsi8CVKnqNVw_3u6OAdp3KnVlzoi9Lvxyrhr27gA&s=10)`}}> 
    <div className='text-white text-xl text-center w-full bg-blue-900/60'>Spider-Man Brand New Day</div></div>
  )
}

export default Banner