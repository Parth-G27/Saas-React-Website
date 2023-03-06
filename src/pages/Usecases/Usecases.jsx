import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Usehero from './Usehero/Usehero';
import Usehead from './Usehead/Usehead';


const Usecases = () => {
    return (
       <>
          <PageHelmet pageTitle="UseCases" />
          <HomeThreeHeader/>
          <Usehero/>
          <Usehead/>
       
          
          <HomeThreeFooter/>
     </>
    );
 };
 
 export default Usecases;