import React from 'react';


function Footer() {
const newDate = new Date();
 const year = newDate.getFullYear(); 

   return(
<footer className="bg-gray-900 mt-12">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-6 sm:px-6 lg:px-8 lg:pt-8">

    <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
        </li>

        <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
        </li>
         <li>
          <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
        </li>
      </ul>
     <div
      className="mt-6 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between lg:mt-8"
    >
         <p className=" text-gray-500 text-center">&copy; {year}. Elite-tech. All rights reserved.</p>
</div>
        
       




    
      
  </div>
        </footer>
        
           

     


     )
}
 export default Footer;