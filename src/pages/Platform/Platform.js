import React from 'react';

import PageHelmet from '../../components/shared/PageHelmet';

import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';

import Hero from './Hero/Hero';
import PlatformFeatures from './PlatformFeatures/PlatformFeatures';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';


const About = () => {
   return (
      <>
         <PageHelmet pageTitle="Platform" />

         <HomeThreeHeader/>
         {/* <CommonPageHeader title="Platform" subtitle="Platform" /> */}

         <Hero/>
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