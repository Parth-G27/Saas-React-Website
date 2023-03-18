import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeThreeHeader from '../HomeThree/HomeThreeHeader/HomeThreeHeader';
import HomeThreeFooter from '../HomeThree/HomeThreeFooter/HomeThreeFooter';
import Usehero from './Usehero/Usehero';
import Usehead from './Usehead/Usehead';
import Telecommunications from './Telecommunications/Telecommunications';
import Healthcare from './Healthcare/Healthcare';
import Agriculture from './Agriculture/Agriculture';
import Finance from './Finance/Finance';
import Construction from './Construction/Construction';
import Transportation from './Transportation/Transportation';
import Government from './Government/Government';
import FoodServices from './Foodservices/Foodservices';
import RealEstate from './Realestate/Realestate';
import Trial from './Trial/Trial';
import New from './New/New';


const Usecases = () => {
    return (
       <>
          <PageHelmet pageTitle="UseCases" />
          <HomeThreeHeader/>
          <Usehero/>
          {/* <New/>
          <Trial/> */}
          <Usehead/>
          <Telecommunications/>
          <Healthcare/>
          <Agriculture/>
          <Finance/>
          <Construction/>
          <Transportation/>
          <Government/>
          <FoodServices/>
          <RealEstate/>
       
          
          <HomeThreeFooter/>
     </>
    );
 };
 
 export default Usecases;