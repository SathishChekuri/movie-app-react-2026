import React from 'react'
import hero from '../assets/hero.png'
function WatchList() {
  return (
    <>
    <div className='flex justify-center flex-wrap m-4'>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold m-4'>Action</div>
       <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold m-4'>Action</div>
    </div>
    
    <div className='flex justify-center my-4 '>
      <input type="text" placeholder="Search Movies" className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' />
    </div>
    <div className='border border-gray-200 m-8'>
      <table className='w-full text-gray-500 text-center'>
        <thead className='border border-b-2'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
        </thead>
        <tbody  className=''>
            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[6rem] w-[10rem]' src="/src/assets/hero" alt="hell0" />
                <div className='mx-100'>The Matrix</div>
              </td>
              <td>8.5</td>
              <td>9</td>
              <td>Action</td>
              <td className='text-red-800'>Delete</td>
            </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default WatchList