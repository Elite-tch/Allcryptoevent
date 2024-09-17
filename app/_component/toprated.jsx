import React from 'react';
import Link from 'next/link';
import LocationIcon from './_icons/locationIcon';
import TimeIcon from './_icons/timeIcon';
import DateIcon from './_icons/dateIcon';
import Image from "next/image";

function TopRated() {
   return(
<div className="px-8 py-14 bg-gray-800 ">
    <h2 className="text-white pb-5 font-bold">UPCOMING EVENTS</h2>

  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 md:gap-6 lg:gap-8">
  <article
  className="overflow-hidden rounded-lg py-25 shadow-lg  bg-gray-900 text-white ">

    <Image width={1000}
      height={700} alt=""
      src={"/img.jpg"}
      className=" img"
    />
  <div className="p-4 sm:p-6 mx-auto ">
      <h3 className="text-lg font-medium">Unlocking ICPCs Developers Ecosystem</h3> 
    <div className="mt-4 flex items-center  justify-center sm:gap-4 gap-4 text-xs text-center">
      <div className=" flex  flex-col justify-center sm:shrink-0 items-center ">
          <LocationIcon />
  <div className="mt-1.5 sm:mt-0">
  <p className="text-gray-500">  Event State</p>
 <p className="font-medium">Ede,Osun State</p>
        </div></div>
      <div className=" flex  flex-col justify-center sm:shrink-0 items-center sm:gap-2">      
        <DateIcon />
<div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Event Date</p>
   <p className="font-medium">14th Sept 2024</p>
        </div>  </div>
        <div className=" flex  flex-col justify-center sm:shrink-0 items-center sm:gap-2">        <TimeIcon /> 
        
    <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Event Time</p>

  <p className="font-medium">10:30Am WAT</p>
 </div> </div></div></div>
    <Link href="findout" className="group mb-5 px-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link>
</article>

    <article
  className="overflow-hidden rounded-lg py-25 shadow-lg  bg-gray-900 text-white">

  <Image alt="img1" src={"/img1.jpg" } width={1000}
    height={700} className="  img"
  />
  <div className="p-4 sm:p-6 mx-auto ">
      <h3 className="text-lg font-medium">Empowering The Future Of Internet Control</h3> 
    <div className="mt-4  flex items-center text-center justify-center sm:gap-4  gap-4 text-xs">
      <div className=" flex  flex-col justify-center sm:shrink-0 items-center  ">
          <LocationIcon />
  <div className="mt-1.5 sm:mt-0">
  <p className="text-gray-500">Event State</p>
 <p className="font-medium">Uni Uyo State</p>
        </div></div>
      <div className=" flex  flex-col justify-center sm:shrink-0 items-center sm:gap-2">      
        <DateIcon />
<div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Event Date</p>
   <p className="font-medium">27th Sept 2024</p>
        </div>  </div>
        <div className=" flex  flex-col justify-center sm:shrink-0 items-center sm:gap-2">        
        <TimeIcon />
    <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Event Time</p>

  <p className="font-medium">10Am WAT</p>
 </div> </div></div></div>
    <Link href="findout" className="group mb-5 px-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link>
</article>

    <article
  className="overflow-hidden rounded-lg py-25 shadow-lg  bg-gray-900 text-white">

  <Image alt="img2" src={"/img3.jpg" } width={1000}
    height={700} className=" img"
  />
  <div className="p-4 sm:p-6 mx-auto ">
      <h3 className="text-lg font-medium"> Tech Novate Fest 2024 </h3> 
    <div className="mt-4 flex items-center text-center justify-center  gap-4 text-xs">
      <div className=" flex  flex-col justify-center sm:shrink-0 items-center ">
          <LocationIcon />
  <div className="mt-1.5 sm:mt-0">
  <p className="text-gray-500">Event State</p>
 <p className="font-medium">Gbagada Lagos</p>
        </div></div>
      <div className=" flex  flex-col justify-center sm:shrink-0 items-center sm:gap-2">      
        <DateIcon />
<div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Event Date</p>
   <p className="font-medium">14th Oct 2024</p>
        </div>  </div>
        <div className=" flex  flex-col justify-center sm:shrink-0 items-center sm:gap-2">        <TimeIcon /> 
        
    <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Event Time</p>

  <p className="font-medium">10Am WAT</p>
 </div> </div></div></div>
    <Link href="findout" className="group mb-5 px-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link>
</article>


    
  </div>
</div>


  
     


     )
}
 export default TopRated;