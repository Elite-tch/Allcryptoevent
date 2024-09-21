"use client";
import React from 'react';

import HeroPage from './_component/hero.jsx';
import TopRated from './_component/toprated.jsx';
import HomeService from './_component/service.jsx';
import Review from './_component/review.jsx';
import OurTeam from './_component/ourTeam.jsx';

import Image from "next/image";

export default function Home() {
  
  return (
    <div className="">

<HeroPage />
<TopRated />
    <HomeService /> 
      <Review />  
      <OurTeam /> 
      



      </div>
    );
}
