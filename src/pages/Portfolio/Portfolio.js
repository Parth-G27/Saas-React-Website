import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import PortfolioArea from './PortfolioArea/PortfolioArea';

const Portfolio = () => {
   return (
      <>
         <PageHelmet pageTitle="One Nine AI" />

         <HomeOneHeader/>
         <CommonPageHeader title="Our Portfolio" subtitle="Portfolio" />
         <PortfolioArea/>
         <Footer/>
      </>
   );
};

export default Portfolio;