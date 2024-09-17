import React from 'react';
import Image from 'next/image';


function OurTeam() {
   return(
<div className="px-8 py-8 ">
 <h1 className="text-xl text-center font-bold" >Our Team </h1>
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 md:gap-6 lg:gap-8">
<article className="rounded-xl border border-gray-700 bg-gray-800 p-4 mt-6">
  <div className="flex items-center gap-4 flex-col">
    <Image width={1000}
      height={1000}
      alt=""
      src={"/bgc.jpg"}
      className="size-8 h-32 w-32 rounded-full object-cover"
    />

    <div className="text-center ">
      <h3 className="text-lg font-medium text-white">Claire Mac</h3>
      <p className="text-gray-500 text-xs">CEO All Crypto Event Hub</p>
      <div className="flow-root">
        <ul className="-m-1 flex flex-wrap justify-center">
          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> Twitter </a>
          </li>

          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> LinkedIn </a>
          </li>       
</ul>
</div>
 </div>
      </div></article>

  <article className="rounded-xl border border-gray-700 bg-gray-800 p-4  mt-6">
  <div className="flex items-center gap-4 flex-col">
    <Image width={1000}
      height={1000}
      alt=""
      src={"/bgc.jpg"}
      className="size-8 h-32 w-32 rounded-full object-cover"
    />

    <div className="text-center ">
      <h3 className="text-lg font-medium text-white">Claire Mac</h3>
      <p className="text-gray-500 text-xs">Community Manager</p>
      <div className="flow-root">
        <ul className="-m-1 flex flex-wrap justify-center">
          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> Twitter </a>
          </li>

          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> LinkedIn </a>
          </li>       
</ul>
</div>
 </div>
      </div></article>
  
<article className="rounded-xl border border-gray-700 bg-gray-800 p-4 mt-6">
  <div className="flex items-center gap-4 flex-col">
    <Image width={1000}
      height={1000}
      alt=""
      src={"/bgc.jpg"}
      className="size-8 h-32 w-32 rounded-full object-cover"
    />

    <div className="text-center ">
      <h3 className="text-lg font-medium text-white">Claire Mac</h3>
      <p className="text-gray-500 text-xs">Event Manager</p>
      <div className="flow-root">
        <ul className="-m-1 flex flex-wrap justify-center">
          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> Twitter </a>
          </li>

          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> LinkedIn </a>
          </li>       
</ul>
</div>
 </div>
      </div></article>
  </div>
  
  
</div>
     
     


     )
}
 export default OurTeam;