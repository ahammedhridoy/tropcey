import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data } from '@/data/pages';
import React from 'react'

async function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const hash = searchParams;

  if(typeof window !== 'undefined') {}

  const spread_whiteCashew = data?.spread_whiteCashew;

  return (
    <div className='relative overflow-hidden'>
      <Background leftSrc={spread_whiteCashew.backgroundImage.left} RightSrc={spread_whiteCashew.backgroundImage.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={spread_whiteCashew.imgUri} width={spread_whiteCashew.mainImage.sizeW}/>
        <RightTextBox details={spread_whiteCashew} isSpread={true}/>
      </div>
    </div>
  )
}

export default page