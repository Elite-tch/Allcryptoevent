import React from 'react';

function NewsLetter() {

  return (
<div className=" px-4 py-6 ">
      <h1 className="text-2xl font-bold sm:text-xl text-gray-900 text-center">
        Newsletter Subscription: Stay Informed with Our Latest News
      </h1>

      <p className="mt-4  text-gray-700 text-center text-sm md:text-xl pb-8">
        Stay ahead with the latest updates from our community. From upcoming events to insightful articles and special offers, we’ll keep you in the loop with everything you need to know.
      </p>
<form action="#" className="flex justify-center items-center   " >
<input type="email" className="w-full bg-gray-200 rounded-lg border-gray-600 px-4 py-3 text-sm shadow-xl mx-2 outline-none"
          placeholder="Enter email"
        />
<button
        type="submit"
        className="inline-block rounded-lg bg-indigo-700 px-5 py-3 text-sm mx-2 font-medium text-white"
      >
        Subscribe
      </button>



</form>


  

  

  
</div>
    
  )
}

export default NewsLetter;
