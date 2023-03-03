import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Partnerarea from './Partnerarea/Partnerarea';


const Partner = () => {
   return (
      <>
         <PageHelmet pageTitle="Solutions" />
         <HomeThreeHeader/>
         <Partnerarea/>

         <HomeThreeFooter/>

      </>
   );
};

export default Partner;