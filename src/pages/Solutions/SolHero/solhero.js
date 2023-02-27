import React from 'react';


import plat_Hero from './test.json';
import Lottie from 'lottie-react';


const SolHero = () => {
   return (
      <>
         <section className="services__area-2 mt-120 pt-70 pb-140 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            
               <div className="about__area-2 pt-130 pl-20">
                  <div className="row">

   

                  <Lottie className="col-xl-4 col-lg-4" speed={null} loop={true} animationData ={plat_Hero} />
                  
                 
                     
                     <div className="col-xl-7 col-lg-6">
                        <div className="about__content pl-140">
                           <div className="section__title section__title-3 mb-25 ">
                              <h3 >Human & AI enabled Workforce of the Future</h3>
                           </div>
                           <p>  As AI has become a more significant driver of economic activity, there has been increased interest from organizations to train all of the workforce with data driven skillsets.  Organizations can enable digital transformation & create workforce of the future using OneNine AI to train all the employees about data driven decision making.  It reduces entry barriers for individuals and businesses to start using AI and machine learning. </p>                               
                           
                           <p className='wee'> Workforce enabled with practical AI skillsets & data driven solutions to their problems</p>                        
                        </div>
                     </div>

                     
                  </div>
               </div>
            
         </section>
      </>
   );
};

export default SolHero;