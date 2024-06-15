import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data } from '@/data/pages';
import React from 'react'

async function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const hash = searchParams;

  if(typeof window !== 'undefined') {}

  const coil_cinnamon = data?.coil_extravergin;

  return (
    <div className='relative overflow-hidden'>
      <Background leftSrc={coil_cinnamon.background.left} RightSrc={coil_cinnamon.background.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={coil_cinnamon.imgUri} width={coil_cinnamon.mainImage.sizeW}/>
        <RightTextBox details={coil_cinnamon} isFull={true}/>
      </div>
    </div>
  )
}

export default page