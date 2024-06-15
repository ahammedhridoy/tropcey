import React from 'react'

export default function LeftContainer({ imgSrc, brandingSubtitle, width } : any) {
  return (
    <div className='h-[100%] w-[40%] flex flex-col justify-center items-center'>
      <img src={imgSrc} alt="Product image"  width={width ? width : '100%'} className={`h-auto max-w-[450px] mb-[64px]`}/>
      {brandingSubtitle ? <div className='bg-[#0a2847] h-[50px] rounded-lg w-[300px] flex justify-center items-center'>
        <span className='bg-[#0a2847] border-white h-[40px] w-[280px] border-[1px] rounded-lg font-black text-center  flex justify-center items-center'>{brandingSubtitle}</span>
      </div> : null }
    </div>
  )
}
