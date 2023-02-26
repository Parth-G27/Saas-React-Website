import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeAbout from '../Home/HomeAbout/HomeAbout';
import HomeBrands from '../Home/HomeBrands/HomeBrands';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeTwoAchievement from '../HomeTwo/HomeTwoAchievement/HomeTwoAchievement';
import HomeTwoFaq from '../HomeTwo/HomeTwoFaq/HomeTwoFaq';
import Hero from './Hero/Hero';
import PlatformFeatures from './PlatformFeatures/PlatformFeatures';
import HomeThreeFooter from './HomeThreeFooter/HomeThreeFooter';

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