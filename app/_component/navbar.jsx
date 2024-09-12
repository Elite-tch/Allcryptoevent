import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
    <div className="w-full shadow-md">
      <nav className="flex items-center justify-between top-0"> 
        <div className="navbar-brand p-4"> 
          <Link href="/">Logo</Link>  
        </div>   

        {/* Navbar links */}
        <ul className="navbar-link flex justify-center space-x-4 p-4 bg-gray-100"> 
          <li className="px-4"> 
            <Link href="/event">Events</Link>
          </li>
          <li className="px-4"> 
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="px-4"> 
            <Link href="/about">About</Link>
          </li>
          <li className="px-4"> 
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>

        <div className="nav-login text-center p-4">
          <Link href="/login" className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 hover:border-indigo-500"></span>
            <span className="relative block border border-current bg-white px-4 py-2">Log In</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
