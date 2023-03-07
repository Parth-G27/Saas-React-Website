import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Newscards from './Newscards/Newscards';
import Newstitle from './Newstitle/Newstitle';



const News = () => {
    return (
       <>
          <PageHelmet pageTitle="News" />
          <HomeThreeHeader/>
          <Newstitle/>
          <Newscards/>
          
          
          <HomeThreeFooter/>
     </>
    );
 };
 
 export default News;