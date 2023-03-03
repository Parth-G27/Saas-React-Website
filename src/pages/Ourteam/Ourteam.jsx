import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Teamhero from './Teamhero/Teamhero'


const Ourteam = () => {
    return (
       <>
          <PageHelmet pageTitle="Solutions" />
          <HomeThreeHeader/>
          <Teamhero/>
          
          <HomeThreeFooter/>
     </>
    );
 };
 
 export default Ourteam;