import React from 'react';
import SingleService from '../../../components/SingleService/SingleService';

const HomeServices = () => {
   return (
      <>
         <section className="services__area pt-115 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-70 wow fadeInUp" data-wow-delay=".2s">
                        {/* <span>Highlights</span> */}
                        <h2>No Code Platform</h2>
                     </div>
                  </div>
               </div>
               {/* <div className="row">

                  <SingleService icon="9" title="Get 100+ Data insights in one click" />
                  <SingleService icon="2" title="Pick & Choose from 200+ Visualizations" />
                  <SingleService icon="3" title="300+ Machine Learning models" />
                  <SingleService icon="8" title="Deploy to production within minutes" />
                  <SingleService icon="5" title="Finance Analytics" />
                  <SingleService icon="6" title="Cord Processing" />
                  <SingleService icon="7" title="Development" />
                  <SingleService icon="8" title="Financial audit" />

               </div> */}
            </div>
         </section>
      </>
   );
};

export default HomeServices;