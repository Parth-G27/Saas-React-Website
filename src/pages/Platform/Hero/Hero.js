import React from 'react';


import plat_Hero from './platform_hero.json';
import Lottie from 'lottie-react';


const Hero = () => {
   return (
      <>
         <section className="services__area-2 mt-120 pt-70 pb-140 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            
               <div className="about__area-2 pt-130 pl-20">
                  <div className="row">

   

                  <Lottie className="col-xl-4 col-lg-4" speed={null} loop={true} animationData ={plat_Hero} />
                  
                 
                     
                     <div className="col-xl-7 col-lg-6">
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