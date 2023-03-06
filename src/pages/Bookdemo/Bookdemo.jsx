import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Bookhero from './Bookhero/Bookhero';
import HomeTwoFeatures from '../HomeThree/HomeTwoFeatures/HomeTwoFeatures'
import Cal from './Cal/Cal';


// import HomeHeroSlider from '../HomeThree/HomeHeroArea/HomeHeroSlider';




const Bookdemo = () => {
   return (
      <>
         <PageHelmet pageTitle="Bookdemo" />
         <HomeThreeHeader/>
         <Bookhero/>
         <HomeTwoFeatures/>



         


      
         
         <Cal/>
         <HomeThreeFooter/>
         {/* <Calendly/>
         <div className="mt-50">

         </div> */}

      </>
   );
};

export default Bookdemo;