import React from 'react';
import plat_Hero from './platform_hero.json';
import Lottie from 'lottie-react';


const Hero = () => {
   return (
      <>
      {/* <section className="services__area mt-115 pb-0">
      <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-m text-center mb-0 wow fadeInUp" data-wow-delay=".2s">
                       
                        <h2>No Code Platform</h2>
                     </div>
                  </div>
               </div>  
            </div>
            </section> */}

<section className="services__area pt-115 pb-0">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mt-100 mb-0 wow fadeInUp" data-wow-delay=".2s">
                        <h2>No Code Platform</h2>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="services__area-2 mt-0 pt-0 pb-0 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            
               <div className="about__area-2 pt-100 pl-20">
                  <div className="row">

   

                  <Lottie className="col-xl-4 col-lg-4" speed={null} loop={true} animationData ={plat_Hero} />
                  
                 
                     
                     <div className="testing">
                        <div className="about__content pl-140">
                           <div className="section__title section__title-3 mb-25 ">
                              <h2 >Most Easiest & User Friendly AI Platform</h2>
                           </div>
                           <p >Our no code platform democratizes Data Literacy & Al to everyone. It reduces entry barriers for individuals and businesses to start using Al and machine learning. Our goal is to bring Al to everyone and accelerate digital transformation & organization's Al journey.</p>
                           
                        </div>
                     </div>

                     
                  </div>
               </div>
            
         </section>
      </>
   );
};

export default Hero;