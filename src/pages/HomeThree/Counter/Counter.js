import React from 'react';
import SingleCount from '../../../components/SingleCount/SingleCount';

const HomeCounterArea = () => {
   return (
      <>
         <section className="counter__area mt-100 pb-100">
            <div className="container">
               <div className="counter__inner white-bg wow fadeInUp" data-wow-delay=".2s">
                  <div className="row">

                     <SingleCount counter={90} option="%" title="Cost Reduction" />
                     <SingleCount counter={80} option="%" title="Time Reduction" />
                     <SingleCount counter={500} option="+" title="Million Data Points" />
                     <SingleCount counter={1000} option="+" title="AI Projects Created" />
                     {/* <SingleCount counter={500} option="" title="Models Built" /> */}
                     <SingleCount counter={300} option="+" title="Machine Learning models" />
                     <SingleCount counter={100} option="+" title="Algorithms" />
                     
                     

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeCounterArea;