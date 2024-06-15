"use client"
// @ts-nocheck
import { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {
    // Function to handle the marker click event
    const onMarkerClick = (event : any, url : any) => {
      event.preventDefault();
      document.querySelectorAll('.marker img').forEach((img :any) => {
        img.style.display = 'none';
        img.classList.remove('initial-zoom');
      });

      const imageWrapper = event.currentTarget.closest('.image-wrapper');
      const sideImg = document.querySelector<any>('.side-img');
      sideImg.style.display = 'none';

      const img = event.currentTarget.querySelector('img');
      img.style.display = 'block';
      img.style.zIndex = 1000;
      img.classList.add('bigImg');
      imageWrapper.classList.add('initial-zoom');

      setTimeout(() => {
        img.classList.add('end-state');
      }, 200);

      setTimeout(() => {
        // imageWrapper.classList.add('zoom-out');
      }, 500);

      setTimeout(() => {
        window.location.href = url;
      }, 900);
    }
    document.querySelectorAll('.marker').forEach(marker => {
      const url = marker.getAttribute('data-url');
      marker.addEventListener('click', (event) => onMarkerClick(event, url));
    });

    return () => {
    
      document.querySelectorAll('.marker').forEach((marker : any) => {
        marker.removeEventListener('click', onMarkerClick);
      });
    };
  }, []);

  return (
    <>
      {/* <div className="header flex fixed space-between z-10">
        <div className="header-left">
        <img className="treeImg" width="100px" src="/images/home1/About us Pages-08.png" alt="Descriptive Alt Text" />
        </div>
        <div className="header-right flex">
        <img className="" width="" height="10px" src="/images/home1/About us Pages-11.png" alt="Descriptive Alt Text" />
        <img className="" height="10px" src="/images/home1/About us Pages-12.png" alt="Descriptive Alt Text" />
        </div>
      </div> */}
      <div className="top-container flex z-0">
        <div className="landing-left flex items-center">
          <div className="flex relative">
            <img className="treeImg" width="95%" src="/images/home1/About us Pages-06.png" alt="Descriptive Alt Text" />
            <img className="absolute" style={{ bottom: '-33%' }} width="100%" src="/images/home1/About us Pages-05.png" alt="Descriptive Alt Text" />
            <img className="absolute" style={{ bottom: '-33%', left: '55%', transform: 'scale(0.65)' }} width="100%" src="/images/home1/About us Pages-07.png" alt="Descriptive Alt Text" />
          </div>
        </div>
        <div className="landing-right flex justify-center items-center">
          <div className=" mb-[200px]">
            <img className="" style={{ margin: 'auto' }} width="50%" src="/images/home1/About us Pages-10.png" alt="Descriptive Alt Text" />
            <img className="" style={{ top: '50%' }} width="100%" src="/images/home1/About us Pages-09.png" alt="Descriptive Alt Text" />
          </div>
        </div>
      </div>
      <div className="relative h-[100vh]">
        <div className="image-wrapper">
          <img src="/images/land/L 1-02.png" alt="Descriptive Alt Text" />
          <div data-url="/vinegar" className="marker" style={{ top: '15%', left: '42%' }}><img src="/images/land/About us Pages-03.png" width="150px" height="150px" /></div>
          <div data-url="/trecale" className="marker" style={{  top: '15%', left: '64%' }}><img src="/images/land/About us Pages-04.png" width="150px" height="150px" /></div>
          <div data-url="/chips" className="marker" style={{  top: '30%', left: '10%' }}><img src="/images/land/About us Pages-05.png" width="150px" height="150px" /></div>
          <div data-url="/spread" className="marker" style={{  top: '30%', left: '32%' }}><img src="/images/land/About us Pages-09.png" width="150px" height="150px" /></div>
          <div data-url="/flour" className="marker" style={{  top: '30%', left: '53%' }}><img src="/images/land/About us Pages-11.png" width="150px" height="150px" /></div> 
          <div data-url="/sugar" className="marker" style={{  top: '50%', left: '15%' }}><img src="/images/land/About us Pages-06.png" width="150px" height="150px" /></div>
          <div data-url="/dessicated" className="marker" style={{  top: '50%', left: '40%' }}><img src="/images/land/About us Pages-08.png" width="150px" height="150px" /></div>
          <div data-url="/milk" className="marker" style={{  top: '50%', left: '70%' }}><img src="/images/land/About us Pages-10.png" width="150px" height="150px" /></div>
          <div data-url="/oil" className="marker" style={{  top: '65%', left: '55%' }}><img src="/images/land/About us Pages-07.png" width="150px" height="150px" /></div>
        </div>
          <div className="side-img" style={{ top: '68%', left: '68%' }}><img src="/images/land/About us Pages-13.png" width="250px" height="150px" /></div>
      </div>
    </>
  );
}
