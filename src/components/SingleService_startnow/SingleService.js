import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({icon,title,desc}) => {
   return (
      <>
         <div className="col-xl-6 col-lg-5 col-md-6 col-sm-6">
            <div className="services__item mb-80">
               <div className="services__icon mb-25">
                  <img src={`assets/img/icon/services/services-${icon}.png`} alt="services"/>
               </div>
               <div className="services__content">
                  <h2>{title}</h2>
                  <p className='startnow'>{desc}</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleService;