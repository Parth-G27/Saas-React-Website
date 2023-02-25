import React from 'react';
import SingleService from '../../../components/SingleService/SingleService';


import plat_Hero1 from './sub_hero-1.json';
import plat_Hero2 from './sub_hero-2.json';
import Lottie from 'lottie-react';


const HomeServices = () => {
   return (
      <>
         <section className="services__area pt-115 pb-0">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-0 wow fadeInUp" data-wow-delay=".2s">
                        {/* <span>Highlights</span> */}
                        <h2>No Code Platform</h2>
                     </div>
                  </div>
               </div>  
            </div>
            <section className="services__area-2 mt-50 pt-70 pb-0 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            
               <div className="about__area-2 pt-130 pl-20">
                  <div className="row">
                  <Lottie className="col-xl-4 col-lg-4" speed={null} loop={true} animationData ={plat_Hero1} />
                    <div className="col-xl-7 col-lg-6">
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
         <section className="services__area-3 mt-10 pt-20 pb-140 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            
               <div className="about__area-2 pt-10 pl-20">
                  <div className="row">
                  <div className="col-xl-6 col-lg-5">
                        <div className="about__content pl-10 ">
                           <div className="section__title section__title-3 mb-25 mt-80">
                              <h3 >One Click Automated Data Analysis</h3>
                           </div>
                           <p >Automated Data Analysis lets you uncover new insights from your data with self service exploratory data analysis. Just select data & choose report type to see new insights</p>                           
                        </div>
                     </div>  
                   
                   <Lottie className="col-xl-4 col-lg-4" speed={null} loop={true} animationData ={plat_Hero2} />
                  
                  
                                      
                  </div>
               </div>  
         </section>
         </section>
      </>
   );
};

export default HomeServices;