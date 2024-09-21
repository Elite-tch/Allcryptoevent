import React from 'react';
import Link from "next/link";
import EventCard from './eventCard.jsx';
import NewsLetter from './newsletter.jsx';


function EventPage() {
   return(
     <div>    
<div className="event py-32">
   
<div className="mx-auto max-w-screen-xl px-4   lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
        Join the Ultimate Crypto
        <strong className="font-extrabold text-indigo-700 sm:block"> Event Experience. </strong>
      </h1>

      <p className=" text-white mt-4 text-sm md:text-xl ">
        Discover the latest innovations, connect with industry leaders, and explore groundbreaking opportunities in the world of cryptocurrency. Whether you are an enthusiast or a professional, our events offer something for everyone.
      </p>
       <div className="mt-8 flex  justify-center gap-4">
        <Link
          className="block w-full rounded bg-indigo-800  px-6 py-3 text-sm font-medium text-white hover:text-gray-900 shadow hover:bg-transparent focus:outline-none  active:bg-indigo-500 sm:w-auto"
          href="#"
        >
          Event Tips
        </Link>

        <Link
          className="block w-full bg-white rounded px-6 py-3 text-sm font-medium text-gray-900 shadow hover:bg-indigo-800 hover:text-white focus:outline-none fl sm:w-auto"
          href="#"
        >
          Get In Touch
        </Link>
      </div>
       </div>
    </div>
   </div>
       
<EventCard />
<NewsLetter />
  
</div>
     

     )
}
export default EventPage;
         
