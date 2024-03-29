import React from 'react';
// import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';
//import HomeTwoTestimonial from '../HomeTwo/HomeTwoTestimonial/HomeTwoTestimonial';
// import HomeThreeFaq from './HomeThreeFaq/HomeThreeFaq';
import HomeThreeFooter from './HomeThreeFooter/HomeThreeFooter';
import HomeThreeHeader from './HomeThreeHeader/HomeThreeHeader';
import HomeThreeHeroSection from './HomeThreeHeroSection/HomeThreeHeroSection';
// import HomeThreeProjects from './HomeThreeProjects/HomeThreeProjects';
// import HomeThreeSecondServices from './HomeThreeSecondServices/HomeThreeSecondServices';
import HomeThreeServices from './HomeThreeServices/HomeThreeServices';

// import HomeTwoHeader from './HomeTwoHeader/HomeTwoHeader';
import HomeTwoFeatures from './HomeTwoFeatures/HomeTwoFeatures';
import HomeServices from './HomeServices/HomeServices';
import HomeHeroSlider from './HomeHeroArea/HomeHeroSlider';
import HomeTwoBlogs from './HomeTwoBlogs/HomeTwoBlogs';
import Backedby from '../Partner/Backedby/Backedby';
import Textanimation from './Textanimation/Textanimation';
import ImageBoot from './ImageBoot/ImageBoot';
import Capacity from './Capacity/Capacity';
import Counter from './Counter/Counter';
import Algos from './Algos/Algos';
import Reviews from './Reviews/Reviews';
import Carousel from './Carousel/Carousle';
//import ImgSlide from './ImgSlide/ImgSlide';


const HomeThree = () => {
   return (
      <>
         <PageHelmet pageTitle="OneNine AI" />
         
         <HomeThreeHeader />
         <HomeThreeHeroSection />
         
         {/* <Reviews/> */}
         <HomeThreeServices />
         <Textanimation/>
         <HomeHeroSlider/>
         <Counter/>
         <Capacity/>
         <HomeTwoFeatures/>
         <ImageBoot/>
         
         
         <Algos/>
         <Backedby/>
         <Carousel/>
         {/* <HomeTwoBlogs/> */}

         {/* 
         <HomeServices />
         <Counter/>
         
         
         
        
         
         
         
         <ImageBoot/>
         
         <Textanimation/> */}

        
         
         <HomeThreeFooter />
          {/* <ImgSlide/> */}
         
        
         
       
         
         {/* <HomeThreeFaq />  
         <CommonCtaArea /> */}
      </>
   );
};

export default HomeThree;