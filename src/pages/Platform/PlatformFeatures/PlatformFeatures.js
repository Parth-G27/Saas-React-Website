import React from 'react';
import SingleService from '../../../components/SingleService/SingleService';


import plat_Hero1 from './sub_hero-1.json';
import plat_Hero2 from './sub_hero-2.json';
import plat_Hero3 from './sub_hero-3.json';
import plat_Hero4 from './sub_hero-4.json';
import plat_Hero5 from './sub_hero-5.json';
import plat_Hero6 from './sub_hero-6.json';
import Lottie from 'lottie-react';


const HomeServices = () => {
   return (
      <>
         <section className="services__area pt-115 pb-0">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-m text-center mb-0 wow fadeInUp" data-wow-delay=".2s">
                        {/* <span>Highlights</span> */}
                        <h2>No Code Platform</h2>
                     </div>
                  </div>
               </div>  
            </div>
            <section className="services__area-2 mt-50 pt-70 pb-0 p-relative" style={{ background: `url(assets/img/bg/bg-new.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            
               <div className="about__area-2 pt-130 pl-20">
                  <div className="row">
                  <Lottie className="col-xl-3 col-lg-3" speed={null} loop={true} animationData ={plat_Hero1} />
                    <div className="col-xl-7 col-lg-5">
                        <div className="about__content pl-140">
                           <div className="section__title section__title-3 mb-0 mt-30 ">
                              <h3 >One Click Automated Data Analysis</h3>
                           </div>
                           <p >Automated Data Analysis lets you uncover new insights from your data with self service exploratory data analysis. Just select data & choose report type to see new insights</p>                           
                        </div>
                     </div>                     
                  </div>
               </div>  
         </section>
         <section className="services__area-3 mt-10 pt-20 pb-10 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            
               <div className="about__area-2 pt-10 pl-20">
                  <div className="row">
                  <div className="col-xl-7 col-lg-5">
                        <div className="about__content pl-10 ">
                           <div className="section__title section__title-3 mb-25 mt-80">
                              <h3 >EasyAI - No Code AI</h3>
                           </div>
                           <p>Pick & Choose from the marketplace of most popular machine learning models in the world. It helps you learn AI concepts and develop models at the same time. We are always adding new models on OneNine platform from the experts in the AI field. Our proprietary process will help you build AI models and recommend the best solution based on your data.</p>
                        </div>
                     </div>  
                   
                   <Lottie className="col-xl-4 col-lg-4" speed={null} loop={true} animationData ={plat_Hero2} />
                  
                  
                                      
                  </div>
               </div>  
         </section>
         <section className="services__area-3 mt-10 pt-20 pb-10 p-relative" style={{ background: `url(assets/img/bg/bg-new.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            
               <div className="about__area-2 pt-10 pl-20">
                  <div className="row">
                  <Lottie className="col-xl-4 col-lg-4" speed={null} loop={true} animationData ={plat_Hero3} />
                  <div className="col-xl-7 col-lg-5">
                        <div className="about__content pl-10 ">
                           <div className="section__title section__title-3 mb-25 mt-80">
                              <h3 >EasyDL - No Code Deep Learning</h3>
                           </div>
                           <p> Our platform allows you to build neural networks or traditional machine learning model just by answering few questions. Allows non experts to go from an idea to model in minutes. Learn and build faster. </p>
                        </div>
                     </div>  
                   
                   
                  
                  
                                      
                  </div>
               </div>  
         </section>
         <section className="services__area-3 mt-10 pt-20 pb-40 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            
               <div className="about__area-2 pt-10 pl-20">
                  <div className="row">
                  <div className="col-xl-7 col-lg-5">
                        <div className="about__content pl-10 ">
                           <div className="section__title section__title-3 mb-25 mt-80">
                              <h3 >Self Service Visualization</h3>
                           </div>
                           <p> Modern data exploration and visualization feature allows you to explore and visualize your data, from simple line charts to highly detailed geospatial charts with few clicks. No-code viz builder allows you to connect to any SQL based data sources or upload csv files</p>
                        </div>
                     </div>  
                   
                   <Lottie className="col-xl-4 col-lg-4 ml-70" speed={null} loop={true} animationData ={plat_Hero4} />
                  
                  
                                      
                  </div>
               </div>  
         </section>
         <section className="services__area-3 mt-10 pt-20 pb-10 p-relative" style={{ background: `url(assets/img/bg/bg-new.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            
               <div className="about__area-2 pt-10 pl-20">
                  <div className="row">
                  <Lottie className="col-xl-4 col-lg-4" speed={null} loop={true} animationData ={plat_Hero5} />
                  <div className="col-xl-7 col-lg-5">
                        <div className="about__content pl-10 ">
                           <div className="section__title section__title-3 mb-25 mt-80">
                              <h3 >Open Source Data</h3>
                           </div>
                           <p>Search Open Data from Data.gov (The home of the U.S. Government’s open data) and other sources to discover correlation between your data and open data from around the world,  Open Government Data is a philosophy and increasingly a set of policies - that promotes transparency, accountability and value creation by making government data available to all. Public bodies produce and commission huge quantities of data and information.</p>

                        </div>
                     </div>  
                   
                   
                  
                  
                                      
                  </div>
               </div>  
         </section>
         <section className="services__area-3 mt-10 pt-20 pb-40 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            
               <div className="about__area-2 pt-10 pl-20">
                  <div className="row">
                  <div className="col-xl-6 col-lg-5">
                        <div className="about__content pl-10 ">
                           <div className="section__title section__title-3 mb-25 mt-80">
                              <h3 >Organize Projects & Share Outcomes with others</h3>
                           </div>
                           <p> Control Data, Artifacts, Analysis, Models & Prediction APIs in secured dashboard</p>
                        </div>
                     </div>  
                   
                   <Lottie className="col-xl-4 col-lg-4 ml-90" speed={null} loop={true} animationData ={plat_Hero6} />
                  
                  
                                      
                  </div>
               </div>  
         </section>
         </section>
         {/* <!-- Calendly inline widget begin --> */}

<div className="calendly-inline-widget" data-url="https://calendly.com/onenine/15min?hide_landing_page_details=1&hide_gdpr_banner=1&back=1" ></div>

{/* <!-- Calendly inline widget end --> */}
      </>
   );
};

export default HomeServices;