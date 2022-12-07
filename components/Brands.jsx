import React from 'react'
import { TbBrandAirbnb, TbBrandAppleArcade, TbBrandApple, TbBrandCodesandbox, TbBrandNextjs } from 'react-icons/tb'

const Brands = () => {
  return (
    <div className='text-center py-[90px]'>
      <h2 className='w-[650px] mx-auto font-bold text-5xl leading-[56px]'>We are blessed to work with leading brands.</h2>
      <p className='mt-8 font-bold text-[16px] text-blue-500 hover:text-blue-600 hover:underline'>
        <a href="#">View Work</a>
      </p>
      <div className="mt-[80px] flex justify-center text-5xl gap-x-14 text-slate-300">
        <TbBrandAirbnb />
        <TbBrandAppleArcade />
        <TbBrandApple />
        <TbBrandCodesandbox />
        <TbBrandNextjs />
      </div>
    </div>
  )
}

export default Brands