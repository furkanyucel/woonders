import React from 'react'
import { TbBrandApple } from 'react-icons/tb'

const Header = () => {
  return (
    <div>
      <div className='cont py-[34px] flex justify-between items-center bg-slate-100 bg-opacity-90 fixed w-full sm:flex-col md:flex-row'>
        <a href="">
          <TbBrandApple className='text-2xl' />
        </a>
        <ul className='flex items-center gap-x-6 font-bold leading-4 text-sm sm:flex-col md:flex-row'>
          <li className='sm:py-4 md:py-0'>
            <a href="#" className='text-slate-900'>Home</a>
          </li>
          <li className='sm:py-4 md:py-0'>
            <a href="#" className='transition-all text-slate-400 hover:text-slate-900'>About</a>
          </li>
          <li className='sm:py-4 md:py-0'>
            <a href="#" className='transition-all text-slate-400 hover:text-slate-900'>News</a>
          </li>
          <li className='sm:py-4 md:py-0'>
            <a href="#" className='transition-all text-slate-400 hover:text-slate-900'>Contact</a>
          </li>
          <li className='sm:py-4 md:py-0'>
            <a href="#" className='transition-all px-7 py-[18px] bg-slate-200 hover:bg-slate-300 text-slate-900 hover:text-white rounded-full'>Purchase $27</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header