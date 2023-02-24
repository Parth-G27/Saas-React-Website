import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HomeThreeSingleService from '../../../components/HomeThreeSingleService/HomeThreeSingleService';

const Hero = () => {
   return (
      <>
         <section className="services__area-2 mt-120 pt-270 pb-140 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            {/* <div className="container"> */}
               {/* <div className="row g-0">

                  <HomeThreeSingleService image="1" title="Share Knowledge" subtitle="Data Tracking" />
                  <HomeThreeSingleService image="2" title="Meet New Friends" subtitle="User Experience" />
                  <HomeThreeSingleService image="3" title="Customer Service" subtitle="App Design" />
                  <HomeThreeSingleService image="4" title="Strategic advice" subtitle="Press Releases" />

               </div> */}
               <div className="about__area-2 pt-130 pl-20">
                  <div className="row">
                  <img className="col-xl-4 col-lg-3" src="assets/img/footer/footer-img-1.png" alt=""/>
                     {/* <div className="col-xl-5 col-lg-5">
                     
                        <div className="about__thumb-2 p-relative m-img">
                           
                        </div>
                     </div> */}
                     <div className="col-xl-5 col-lg-6">
                        <div className="about__content">
                           <div className="section__title section__title-3 mb-25">
                              <h2 >Build data driven workforce faster on OneNine AI</h2>
                           </div>
                           <p >OneNine Al is a no code Al platform that will democratize Al to everyone. It reduces entry barriers for individuals and businesses to start using Al and machine learning. Our goal is to bring Al to everyone and accelerate digital transformation & organization's Al journey.</p>
                           {/* <Link to="/about" className="z-btn">What we do<i > <CgArrowLongRight /> </i></Link> */}
                        </div>
                     </div>
                  </div>
               </div>
            {/* </div> */}
         </section>
      </>
   );
};

export default Hero;