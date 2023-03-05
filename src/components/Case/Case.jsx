import React from 'react';


const Case = ({title}) => {
   return (
      <>
         <div className="features__itemm features__itemm-2 white-bg fix mb-30">
            <div className="features__thumb-2" style={{background: `assets/img/usecases/R.jpg`, backgroundPosition: 'center', backgroundSize: 'cover'}} ></div>
            <div className="features__content-2">
              
               <h3>{title}</h3>
               
            </div>
         </div>
      </>
   );
};

export default Case;