import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data } from '@/data/pages';
import React from 'react'

async function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const hash = searchParams;

  if(typeof window !== 'undefined') {}

  const spread = data?.spread;

  return (
    <div className='relative overflow-hidden'>
      <Background leftSrc={spread.backgroundImage.left} RightSrc={spread.backgroundImage.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={spread.imgUri} width={spread.mainImage.sizeW}/>
        <RightTextBox details={spread}/>
      </div>
    </div>
  )
}

export default page