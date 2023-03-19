import React from 'react';
import SingleCount from '../../../components/SingleCount/SingleCount';

const HomeCounterArea = () => {
   return (
      <>
         <section className="counter__area pb-100">
            <div className="container">
               <div className="counter__inner white-bg wow fadeInUp" data-wow-delay=".2s">
                  <div className="row">

                     <SingleCount counter={90} option="%" title="Cost Reduction" />
                     <SingleCount counter={20} option="+" title="Happy Clients" />
                     <SingleCount counter={80} option="%" title="Time Reduction" />
                     <SingleCount counter={300} option="+" title="Machine Learning models" />

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeCounterArea;