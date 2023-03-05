import React from 'react';
import SingleService from '../../../components/SingleService/SingleService';

const Backedby = () => {
   return (
      <>
         <section className="services__area pt-115 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-70 wow fadeInUp" data-wow-delay=".2s">
                        {/* <span>Highlights</span> */}
                        <h2>We Are Backed By</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

               <div className="col-xl-4 col-lg-3 ">
                        {/* <h3>Custom AI Solutions</h3> */}
                        
                        <div className="m-img pl-30 pb-50">
                            <img src="assets/img/backedby/1.png" alt=""/>
                        </div>
                        <h5 className='ser pl-30 pb-100'>AWS Partner Programs</h5>

                       

                        
               </div>

               <div className="col-xl-4 col-lg-3">
                        
                        <div className="m-img pl-30 pb-50">
                            <img src="assets/img/backedby/2.png" alt=""/>
                        </div>
                        <h5 className='ser pl-30 pb-100'>Microsoft for Startups</h5>
               </div>

               <div className="col-xl-4 col-lg-3">
                        
                        <div className="m-img pl-30 pb-50">
                            <img src="assets/img/backedby/4.png" alt=""/>
                        </div>
                        <h5 className='ser pl-30 pb-100'>IBM Cloud</h5>
               </div>

               <div className="col-xl-4 col-lg-3">
                        
                        <div className="m-img pl-30 pb-50">
                            <img src="assets/img/backedby/3.png" alt=""/>
                        </div>
                        <h5 className='ser pl-30'>Google for Startups</h5>
               </div>

               <div className="col-xl-4 col-lg-3">
                        
                        <div className="m-img pl-30 pb-50">
                            <img src="assets/img/backedby/5.jpg" alt=""/>
                        </div>
                        <h5 className='ser pl-30'>Nvidia Inception program</h5>
               </div>
               
               


                  
                  

                  {/* <SingleService icon="9" title="Get 100+ Data insights in one click" />
                  <SingleService icon="2" title="Pick & Choose from 200+ Visualizations" />
                  <SingleService icon="3" title="300+ Machine Learning models" />
                  <SingleService icon="8" title="Deploy to production within minutes" /> */}
                 

               </div>
            </div>
         </section>
      </>
   );
};

export default Backedby;