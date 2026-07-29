import React from 'react'

function Pagination({handlePrev,handleNext,pgno}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
      <div onClick={handlePrev} className='px-8'><i  class="fa-solid fa-arrow-left"></i></div>
      <div>{pgno}</div>
      <div onClick={handleNext} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination