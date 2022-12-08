import React from 'react'

const Info = () => {
  return (
    <div className='py-[90px] cont flex items-center'>
      <div>
        <img src="https://picsum.photos/520/657" alt="" />
      </div>
      <div className='ml-[80px]'>
        <h2 className='font-bold text-5xl mb-8'>Fun Facts</h2>
        <p className='font-bold text-5xl flex items-center mt-4'>8<span className='ml-4 font-normal text-2xl'>Members</span></p>
        <p className='font-bold text-5xl flex items-center mt-4'>346+<span className='ml-4 font-normal text-2xl'>Projects Done</span></p>
        <p className='font-bold text-5xl flex items-center mt-4'>99%<span className='ml-4 font-normal text-2xl'>Feedback</span></p>
        <p className='font-bold text-5xl flex items-center mt-4'>4<span className='ml-4 font-normal text-2xl'>Global Offices</span></p>
      </div>
    </div>
  )
}

export default Info