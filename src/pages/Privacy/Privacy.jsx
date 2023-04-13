import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import PrivacyHero from './PrivacyHero/PrivacyHero';


const Privacy = () =>{

    return (
        <>
        <PageHelmet pageTitle="Privacy" />
        <HomeThreeHeader/>
        <PrivacyHero/>

          
          
          
        <HomeThreeFooter/>
        </>
    )
}
export default Privacy;