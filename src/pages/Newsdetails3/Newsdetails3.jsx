import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Newsdetails3area from './Newdetails3area/Newsdetails3area'

const Newsdetails3 = () => {

    return (
        <>
        <PageHelmet pageTitle="Newsdetails" />
        <HomeThreeHeader/>
        <Newsdetails3area/>
          
          
          
        <HomeThreeFooter/>
        </>
    )
}

export default Newsdetails3;