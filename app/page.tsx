"use client";
import React from 'react';
import NavBar from './_component/navbar.jsx';
import HeroPage from './_component/hero.jsx';
import TopRated from './_component/toprated.jsx';
import HomeService from './_component/service.jsx';
import Review from './_component/review.jsx';
import OurTeam from './_component/ourTeam.jsx';
import Footer from './_component/footer.jsx';
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="">
<NavBar />
<HeroPage />
<TopRated />
    <HomeService /> 
      <Review />  
      <OurTeam /> 
      <Footer />   



      </div>
    );
}