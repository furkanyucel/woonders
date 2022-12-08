import React from 'react'

const FeaturedWork = () => {
  return (
    <div className='cont py-[90px] bg-slate-100'>
      <h1 className='font-bold text-5xl leading-[56px] text-slate-900 text-center'>Featured Work</h1>
      <div className='mt-[80px] flex flex-wrap gap-14'>
          <div className='bg-white hover:scale-105 transition-all hover:shadow-md'>
            <img src="https://picsum.photos/336/320" alt="" />
            <div className='p-8'>
              <h4 className='font-semibold text-2xl text-slate-900'>Magazine</h4>
            <p className='font-normal text-base text-slate-400'>Logo, User Interface</p>
            </div>
          </div>

          <div className='bg-white hover:scale-105 transition-all hover:shadow-md'>
            <img src="https://picsum.photos/336/320" alt="" />
            <div className='p-8'>
              <h4 className='font-semibold text-2xl text-slate-900'>Belder</h4>
            <p className='font-normal text-base text-slate-400'>Brand Guideline</p>
            </div>
          </div>

          <div className='bg-white hover:scale-105 transition-all hover:shadow-md'>
            <img src="https://picsum.photos/336/320" alt="" />
            <div className='p-8'>
              <h4 className='font-semibold text-2xl text-slate-900'>Streamo</h4>
            <p className='font-normal text-base text-slate-400'>Web Development</p>
            </div>
          </div>

          <div className='bg-white hover:scale-105 transition-all hover:shadow-md'>
            <img src="https://picsum.photos/336/320" alt="" />
            <div className='p-8'>
              <h4 className='font-semibold text-2xl text-slate-900'>Pixelcorner</h4>
            <p className='font-normal text-base text-slate-400'>Branding</p>
            </div>
          </div>

          <div className='bg-white hover:scale-105 transition-all hover:shadow-md'>
            <img src="https://picsum.photos/336/320" alt="" />
            <div className='p-8'>
              <h4 className='font-semibold text-2xl text-slate-900'>Este</h4>
            <p className='font-normal text-base text-slate-400'>Events App</p>
            </div>
          </div>

          <div className='bg-white hover:scale-105 transition-all hover:shadow-md'>
            <img src="https://picsum.photos/336/320" alt="" />
            <div className='p-8'>
              <h4 className='font-semibold text-2xl text-slate-900'>Vibranium</h4>
            <p className='font-normal text-base text-slate-400'>Product Landing Page</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FeaturedWork