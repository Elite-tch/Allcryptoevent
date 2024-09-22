import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const events= [
  { id: 1, name: 'Afro Token Conference ', href: '/', img : "/img13.jpg" , btn:" Join Event ", btn2: "Open For Partners", href2:"/", para1:"Location : Spoke Resort Munyonyo ", para3:"Date : 14th sept 2024 ", para4:"Time : 11:00Am"},

  { id: 2, name: ' Catalysing Conversation', href: '/ ', img : "/img12.jpg" , btn:" Join Event ", btn2: "Open For Partners", href2:"/", para1:" Location : Lagos State ", para3:" Date : 3rd Oct 2024 ", para4:" Time : 9:00Am "},

  { id: 3, name: 'Career Connect  Expo 2024', href: '/ ', img : "/img9.jpg" , btn:" Join Event ", btn2: "Open For Partners", href2:"/", para1:" Location : MAAUM HOTORO Kano ",  para3:" Date : 3rd Oct 2024  ", para4:" Time : 10:00Am  "},
  
  { id: 4, name: 'Nigeria Innovation Summit 9.0 ', href:'/ ', img : "/img10.jpg" , btn:" Join Event ", btn2: "Open For Partners", href2:"/", para1:"Location : Shall Hall, Muson Center Lagos", para3:" Date : 2nd Oct 2024 ", para4:" Time : 10:00Am  "},
  
  { id: 5, name: 'Digital Learning  Festival', href: '/ ', img : "/img7.jpg" , btn:" Join Event ", btn2: "Open For Partners", href2:"/", para1:" Location : National Stadium Surulere",  para3:" Date : 18th Sept 2024 ", para4:" Time : 10:00Am "},
  
  { id: 6, name: 'Young Innovators Nigeria', href:  '/ ', img : "/img3.jpg" , btn:" Join Event ", btn2: "Open For Partners", href2:"/", para1:" Location : Cosmopolitan University Abuja",  para3:" Date : 16th - 17th Oct 2024  ", para4:" Time : 10:00Am "},
  ]


export default function LagosPage() {
  return (
    <div className="pt-32 pb-18 px-4">

      <h1 className="text-2xl font-bold sm:text-xl text-gray-900 text-center">
        Explore Exciting Events in Lagos
      </h1>

      <p className="mt-2  text-gray-700 text-center text-sm md:text-xl pb-2">
        Lagos is buzzing with events! Discover exciting activities and find your next favorite event here.
      </p>

      
 <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 md:gap-6 lg:gap-8">
   {events.map(event => (
<article key={event.id} className="relative border border-gray-300 bg-gray-100 shadow-xl p-4 mt-8">
<Image height={1000} width={1000}
    src={event.img }
    alt="img"
    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  
<h3 className="mt-4 text-lg font-medium text-gray-900">{event.name } </h3>
  
   <p className="mt-1.5 text-sm text-gray-700">{event.para1 }
  </p> 
  
      <span className=" flex justify-between items-center"> 
<p className="mt-1.5 text-sm text-gray-700">{event.para4 }
  </p>
  
    <p className="mt-1.5 text-sm text-gray-700">{event.para3 }
  </p>
</span>
    
  <span className=" flex justify-between items-center gap-4">  
    <Link href={event.href }
      className=" w-full rounded text-indigo-700 mt-4  hover:text-white hover:bg-indigo-600 py-3 text-sm font-medium transition hover:scale-105 shadow-xl text-center "
    >
      {event.btn }
    </Link>
  <Link href={event.href2 }
      className=" w-full rounded bg-indigo-600 text-white hover:bg-white mt-4  hover:text-indigo-700 py-3 text-sm font-medium transition hover:scale-105 shadow-xl text-center"
    >
      {event.btn2 }
    </Link>




    </span>  

  
   </article> ))}
  </div>
  </div>
  


  

    
    
  );
}
