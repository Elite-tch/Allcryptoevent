import React from 'react';
import Link from 'next/link';

const states = [
  { id: 1, name: 'Event in Lagos', href: '/', img : "/img3.jpg" , btn:" View Events", paragraph:"Join us in Lagos for an immersive tech experience. "},
  { id: 2, name: 'Event in Abuja',img : "/img4.jpg",btn:" View Events", href: '/', paragraph: " Explore cutting-edge blockchain innovations in Abuja." },
  { id: 3, name: 'Event in Enugu', img : "/img5.jpg", btn:" View Events", href: '/' , paragraph:"Engage with crypto enthusiasts at Enugu’s premier event. "},
  { id: 4, name: 'Event in Kaduna',img : "/img6.jpg",btn:" View Events", href: '/', paragraph: "Discover the future of Web3 in Kaduna. " },
  { id: 5, name: 'Event in Rivers',img : "/img7.jpg",btn:" View Events", href: '/', paragraph: " Be a part of Rivers’ most exciting crypto gathering." },
  { id: 6, name: 'Event in Portharcout', btn:" View Events", img : "/img8.jpg", href: '/' ,  paragraph:" Meet industry leaders at the Portharcourt tech summit."}
];


function EventCard() {
   return(
<div className=" px-4 py-12 ">
      <h1 className="text-2xl font-extrabold sm:text-xl text-gray-900 text-center">
        Discover All Web3 Events in Nigeria & Beyond
      </h1>

      <p className="mt-4  text-gray-700 text-center text-sm md:text-xl pb-8">
        Explore the latest crypto events in Nigeria & Beyond and connect with like-minded enthusiasts. Stay informed and don’t miss out on opportunities to learn and grow.
      </p>


     <div className=" grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 md:gap-6 lg:gap-8">
 {states.map(state => (
<article key={state.id}  className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src={state.img}
    className="absolute inset-0 h-full w-full object-cover "
  />

  <div className="relative py-14 sm:pt-16 lg:pt-24 px-4 bg-gradient-to-t from-gray-900/80 to-gray-900/80">
   <h3 className="mt-0.5 text-lg text-white font-bold">{state.name}</h3>
    
<p className="mt-0.2 line-clamp-3 text-sm/relaxed text-white/95">
      {state.paragraph}
      </p>
      <Link className="inline-block rounded border border-indigo-600 bg-indigo-600 mt-2 px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none  active:text-indigo-500" href={state.href}>
        {state.btn}
      </Link>

    </div>
  
</article>))}
</div>



  
</div>
     

     
   )
}

export default EventCard;
