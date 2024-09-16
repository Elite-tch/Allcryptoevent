import React from 'react';


function HeroPage() {
   return(
<section className="hero text-white ">
  <div className="mx-auto max-w-screen-xl px-4  pt-32 pb-20 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center hero-text">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Welcome to All Crypto Event Hub – 
        <span className="sm:block"> Your Crypto Events and Networking Gateway.
           </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl  sm:text-xl/relaxed">
        Connect with crypto professionals, explore opportunities, and grow your network. Register, book your hotel, and join us to shape the future of crypto!
      </p>
  <div className="mt-12 flex  justify-center gap-4">
        <button
          className="block w-full rounded border border-blue-600 bg-blue-600 px-3 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none  active:text-opacity-75 sm:w-auto"
      
        >
          Get Started
        </button>

        <button
          className="block w-full rounded border border-blue-600 px-3 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none  active:bg-blue-500 sm:w-auto "
        
        >
          Learn More</button>
      </div>
    </div>
  </div>
</section>
     
     );
}

 export default HeroPage;