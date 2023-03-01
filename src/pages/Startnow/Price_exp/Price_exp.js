import React from 'react';
import SingleService from '../../../components/SingleService_startnow/SingleService';

const HomeServices = () => {
   return (
      <>
         <section className="services__area pt-115 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mt-100 mb-90 wow fadeInUp" data-wow-delay=".2s">
                       
                        <h2>Pricing Built For Businesses Of All Sizes</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <SingleService icon="1" title="Affordability" desc="80% Cost effective compared to other Enterprise platforms. Get 100+ insights using One Click Automation, 200+ Data Visualization & 300+ Machine Learning features" />
                  <SingleService icon="2" title="Accessibility" desc="Only No Code Platform that covers full data literacy life cycle. Accelerate organization's AI journey by reducing entry barriers for individuals and businesses to start using AI "/>
                  <SingleService icon="3" title="Simplicity" desc="  Wizard based user-friendly interface for non-technical users. Provides step by step instructions to solve a complex AI problem"/>
                  <SingleService icon="8" title="Improve Business Outcomes" desc=" Data Driven Insights will help you increase revenue and deliver projects faster than ever using OneNine"/>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;