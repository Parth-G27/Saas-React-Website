import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Newsdetails2area from './Newdetails2area/Newsdetails2area';

const Newsdetails2 = () => {

    return (
        <>
        <PageHelmet pageTitle="Newsdetails" />
        <HomeThreeHeader/>
        <Newsdetails2area/>
          
          
          
        <HomeThreeFooter/>
        </>
    )
}

export default Newsdetails2;