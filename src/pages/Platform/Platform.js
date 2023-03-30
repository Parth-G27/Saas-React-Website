import React from 'react';

import PageHelmet from '../../components/shared/PageHelmet';

import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';

import Hero from './Hero/Hero';
import PlatformFeatures from './PlatformFeatures/PlatformFeatures';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import HomeHeroArea from './HomeHeroArea/HomeHeroSlider';


const About = () => {
   return (
      <>
         <PageHelmet pageTitle="Platform" />

         <HomeThreeHeader/>
         {/* <CommonPageHeader title="Platform" subtitle="Platform" /> */}

         <Hero/>
         <HomeHeroArea/>
         <PlatformFeatures/>
         <HomeThreeFooter/>
{/* 
         <HomeAbout/>
         <HomeTwoFaq/>
         <HomeTwoAchievement/>
         <HomeBrands/>
         <Footer/> */}
      </>
   );
};

export default About;