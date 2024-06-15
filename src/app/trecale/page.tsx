"use client"
import Background from '@/components/Background'
import LeftContainer from '@/components/LeftContainer';
import RightTextBox from '@/components/RightTextBox';
import { data } from '@/data/pages';
import React from 'react'
import { useEffect, useRef } from 'react';

async function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  const hash = searchParams;

  const animRef = useRef<any>(null);

  useEffect(() => {
    if (animRef.current) {
      setTimeout(() => {
        animRef.current.classList.add('to-normal-position');
      }, 10); 
    }
  }, []);

  if(typeof window !== 'undefined') {}

  const trecale = data?.trecale;

  return (
    <div 
      ref={animRef}
      style={{ transform: 'translate(0, 0) scale(1)', opacity: 0, }} 
      className="animated-element"
    >
      <Background leftSrc={trecale.background.left} RightSrc={trecale.background.right}/>
      <div className='relative text-white flex justify-between h-[100vh] w-[100%] items-center z-10'>
        <LeftContainer imgSrc={trecale.imgUri} width={trecale.mainImage.sizeW}/>
        <RightTextBox details={trecale}/>
      </div>
    </div>
  )
}

export default page