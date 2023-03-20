import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const SingleCount = ({counter,title,color,option}) => {
   const [viewCountUp,setViewCountUp] = useState(false);

   const onVisibilityChange = (isVisible) => {
      if (isVisible) {
         setViewCountUp(true );
      }
   }
   return (
      <>
         <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div className="counter__item text-center mb-30">
               <h2 className={`counter ${color && color}`}>
                  <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
                     <CountUp end={viewCountUp ? counter : 0} duration={3} />
                  </VisibilitySensor>
                  {option}
               </h2>
               <span>{title}</span>
            </div>
         </div>
      </>
   );
};

export default SingleCount;