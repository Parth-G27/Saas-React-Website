import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import SolHero from './SolHero/solhero';

const Solutions = () => {
   return (
      <>
         <PageHelmet pageTitle="Solutions" />
         <HomeThreeHeader/>
         <SolHero/>
         
{/* 
         <Hero/>
         <PlatformFeatures/> */}
         <HomeThreeFooter/>

      </>
   );
};

export default Solutions;