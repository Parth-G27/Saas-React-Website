import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Contact from './Contact/Contact';


const AIAcademy = () => {
    return (
       <>
          <PageHelmet pageTitle="Solutions" />
          <HomeThreeHeader/>
          <Contact/>
          
          

          <HomeThreeFooter/>
 
       </>
    );
 };
 
 export default AIAcademy;