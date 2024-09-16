import React from 'react';
import Link from 'next/link';
import PhotoIcon from './_icons/photoIcon.jsx';
import OrganizeIcon from './_icons/organizeIcon.jsx';
import HotelIcon from './_icons/hotelIcon.jsx';
import PartnerIcon from './_icons/partnerIcon.jsx';
import EventIcon from './_icons/eventIcon.jsx';
import RegisterIcon from './_icons/registerIcon.jsx';



function HomeService() {
   return(
<div className="px-8 my-4 py-8">
      <h2 className=" text-center font-bold text-xl ">What We Offer </h2>
  <p className="text-center text-sm text-gray-500"> Find and attend top crypto events with ease. Our platform helps you discover upcoming events, book hotels or transportation, and connect with the crypto community.</p>
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 md:gap-6 lg:gap-8">
<article
  className="service hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xxl transition  hover:shadow-lg hover:[animation-duration:_4s] mt-8 hover:bg-[length:400%_400%]" 
>
  <div className="rounded-[10px] bg-white px-3 pt-5 text-center flex flex-col items-center justify-center sm:p-6">
    <EventIcon />
      <h3 className="mt-0.5 text-lg font-bold text-gray-900"> 
        Event Posting
      </h3>
          <p className="text-sm text-gray-500"> Submit your event details to be featured on our platform. We’ll handle the promotion and visibility to attract the right audience. <Link href="findout" className="group mb-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Get started

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link> </p>
    
    </div>
</article>
 
<article
  className=" service hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xxl transition hover:bg-[length:400%_400%] hover:shadow-md hover:[animation-duration:_4s] mt-8"
>
  <div className="rounded-[10px] bg-white px-3 pt-5 text-center flex flex-col items-center justify-center sm:p-6">
<RegisterIcon />
      <h3 className="mt-0.5 text-lg font-bold text-gray-900">Event Registration</h3>
          <p className="text-sm text-gray-500">We offer users to quickly register for events with options like buying tickets or reserving a spot directly from the platform.<Link href="findout" className="group mb-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
    Get started

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link> </p>
    
    </div>
</article>


    
<article
  className="service hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xxl transition hover:bg-[length:400%_400%] hover:shadow-md hover:[animation-duration:_4s] mt-8"
>
  <div className="rounded-[10px] bg-white px-3 pt-5 text-center flex flex-col items-center justify-center sm:p-6">
<OrganizeIcon />
     <h3 className="mt-0.5 text-lg font-bold text-gray-900">
      Event Organization
      </h3>
          <p className="text-sm text-gray-500"> Let us handle your event planning and logistics, ensuring everything runs smoothly from start to finish. <Link href="findout" className="group mb-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Get started 

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link> </p>
    
    </div>
</article>

  <article
  className="service hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xxl transition hover:bg-[length:400%_400%] hover:shadow-md hover:[animation-duration:_4s] mt-8"
>
  <div className="rounded-[10px] bg-white px-3 pt-5 text-center flex flex-col items-center justify-center sm:p-6">

    <HotelIcon />

      <h3 className="mt-0.5 text-lg font-bold text-gray-900">Hotel and Uber Booking
      </h3>
          <p className="text-sm text-gray-500"> Alongside booking hotels,we offer assistance with finding venues close to the event location or recommending travel options like Uber. <Link href="findout" className="group mb-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Get started 

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link> </p>
    
    </div>
</article>

  <article
  className="service hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xxl transition hover:bg-[length:400%_400%] hover:shadow-md hover:[animation-duration:_4s] mt-8"
>
  <div className="rounded-[10px] bg-white px-3 pt-5 text-center flex flex-col items-center justify-center sm:p-6">
<PartnerIcon />
  
      <h3 className="mt-0.5 text-lg font-bold text-gray-900">Sponsor, Speaker and Partnership
      </h3>
          <p className="text-sm text-gray-500"> We offer event organizers, sponsors, and speakers to register and submit their events to be posted on the platform. <Link href="findout" className="group mb-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
    Get started

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link> </p>
    
    </div>
</article>


  <article
  className="service hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xxl transition hover:bg-[length:400%_400%] hover:shadow-md hover:[animation-duration:_4s] mt-8"
>
  <div className="rounded-[10px] bg-white px-3 pt-5 text-center flex flex-col items-center justify-center sm:p-6">
<PhotoIcon />
      <h3 className="mt-0.5 text-lg font-bold text-gray-900">Photography and Media Coverage</h3>
          <p className="text-sm text-gray-500"> Capture every key moment with professional photography, so your event is remembered and shared widely. <Link href="findout" className="group mb-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
    Get started

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link> </p>
    
    </div>
</article>
</div>
  


</div>
     


     
   )
}
export default HomeService;