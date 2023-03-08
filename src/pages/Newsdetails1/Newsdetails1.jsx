import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Newsdetails1area from './Newdetails1area/Newsdetails1area'

const Newsdetails1 = () => {

    return (
        <>
        <PageHelmet pageTitle="Newsdetails" />
        <HomeThreeHeader/>
        <Newsdetails1area/>
          
          
          
        <HomeThreeFooter/>
        </>
    )
}

export default Newsdetails1;