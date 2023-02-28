import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Price_exp from './Price_exp/Price_exp';


const Startnow = () => {
   return (
      <>
         <PageHelmet pageTitle="Solutions" />
         <HomeThreeHeader/>
         <Price_exp/>
         
{/* 
         <Hero/>
         <PlatformFeatures/> */}
         <HomeThreeFooter/>

      </>
   );
};

export default Startnow;