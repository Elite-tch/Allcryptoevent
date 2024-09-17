import React from 'react';
import Link from 'next/link';


function Review() {
   return(
<div>
<section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-14 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Hear What Our Community Has to Say About Their 

        <span className="sm:block"> Experience on Our Event Platform. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-gray-500 sm:text-xl/relaxed">
        We value the experiences of everyone who interacts with our platform. Whether you are attending an event or promoting one, your feedback helps us improve and grow.
      </p>
      <div className="mt-8 flex  justify-center gap-4 flex-wrap">
        <Link
          className="block w-full rounded border border-blue-600 bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none  active:text-opacity-75 sm:w-auto"
          href="#"
        >
        Reviews from Event Attendees
        </Link
        >

        <Link
          className="block w-full rounded border border-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none  active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Reviews from Event Promoters
        </Link>
      </div>
    </div>
  </div>
</section>
</div>
     

     )
}
export default Review;