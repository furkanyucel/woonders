import React from 'react'
import { TbBrandApple } from 'react-icons/tb'

const Header = () => {
  return (
    <div>
      <div className='cont py-[34px] flex justify-between items-center bg-slate-100 bg-opacity-90 fixed w-full'>
        <a href="">
          <TbBrandApple className='text-2xl' />
        </a>
        <ul className='flex items-center gap-x-6 font-bold leading-4 text-sm text-[#23262F]'>
          <li>
            <a href="#" className='text-slate-900'>Home</a>
          </li>
          <li>
            <a href="#" className='text-slate-400 hover:text-slate-900'>About</a>
          </li>
          <li>
            <a href="#" className='text-slate-400 hover:text-slate-900'>News</a>
          </li>
          <li>
            <a href="#" className='text-slate-400 hover:text-slate-900'>Contact</a>
          </li>
          <li>
            <a href="#" className='px-7 py-[18px] bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-full'>Purchase $27</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header