import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Contact from './Contact/Contact';
import Hero_sec from './Hero_sec/Hero_sec';
import NewContact from './NewContact/NewContact';
import ImageBoot from  './ImageBoot/ImageBoot';
import NewHero from './NewHero/NewHero';
import Info from './Info/Info';

const AIAcademy = () => {
    return (
       <>
          <PageHelmet pageTitle="AI Academy" />
          <HomeThreeHeader/>
          <Hero_sec/>
          <ImageBoot/>
          <NewHero/>
          <Info/>
          <NewContact/>
          

          {/* <Contact/> */}
          <HomeThreeFooter/>
     </>
    );
 };
 
 export default AIAcademy;