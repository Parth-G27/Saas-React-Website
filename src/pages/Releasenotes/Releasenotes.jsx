import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import ReleaseHero from './ReleaseHero/ReleaseHero';


const Releasenotes = () =>{

    return (
        <>
        <PageHelmet pageTitle="Platform Release Notes" />
        <HomeThreeHeader/>
        <ReleaseHero/>

          
          
          
        <HomeThreeFooter/>
        </>
    )
}
export default Releasenotes;