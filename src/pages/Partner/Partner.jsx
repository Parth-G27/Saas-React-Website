import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Partnerarea from './Partnerarea/Partnerarea';
// import Backed from './Backed/Backed';
import Backedby from './Backedby/Backedby';



const Partner = () => {
   return (
      <>
         <PageHelmet pageTitle="Partner" />
         <HomeThreeHeader/>
         <Partnerarea/>
         {/* <Backed/> */}
         <Backedby/>
         <HomeThreeFooter/>

      </>
   );
};

export default Partner;