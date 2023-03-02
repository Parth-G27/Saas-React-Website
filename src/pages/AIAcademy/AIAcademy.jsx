import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Contact from './Contact/Contact';
import Hero_sec from './Hero_sec/Hero_sec';


const AIAcademy = () => {
    return (
       <>
          <PageHelmet pageTitle="Solutions" />
          <HomeThreeHeader/>
          <Hero_sec/>
          <Contact/>
          
          

          <HomeThreeFooter/>
          
 
       </>
    );
 };
 
 export default AIAcademy;