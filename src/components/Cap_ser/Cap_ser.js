import React from 'react';
import { Link } from 'react-router-dom';

const Cap_ser = ({icon,title}) => {
   return (
      <>
         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="services__item mb-80">
               <div className="features__icon features__icon-2">
                  <i> {icon} </i>
               </div>
               <div className="services__content">
                  <h2>{title}</h2>
                  
               </div>
            </div>
         </div>
      </>
   );
};

export default Cap_ser;