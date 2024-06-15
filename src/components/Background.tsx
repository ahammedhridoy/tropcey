import React from 'react';
import '../styles/background.css'

export default function Background({leftSrc, RightSrc} : any) {
  
  return (
    <div className="">
      <div className="background-container">
        <img className='left-bg' src={leftSrc}/>
        <img className='right-bg' src={RightSrc} />
      </div>
    </div>
  );
}
