import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Ser_Hero from './Ser_Hero/Ser_Hero';



const Partner = () => {
   return (
      <>
         <PageHelmet pageTitle="Service" />
         <HomeThreeHeader/>
         <Ser_Hero/>
         
         <HomeThreeFooter/>

      </>
   );
};

export default Partner;