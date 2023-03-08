import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Newsdetails4area from './Newdetails4area/Newsdetails4area'

const Newsdetails4 = () => {

    return (
        <>
        <PageHelmet pageTitle="Newsdetails" />
        <HomeThreeHeader/>
        <Newsdetails4area/>
          
          
          
        <HomeThreeFooter/>
        </>
    )
}

export default Newsdetails4;