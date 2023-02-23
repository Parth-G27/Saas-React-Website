import React from 'react';
import { Link } from 'react-router-dom';

const HomeThreeHeroSection = () => {
   return (
      <>
         <section className="hero__area p-relative">
            <div className="hero__shape">
               <img className="one" src="assets/img/icon/slider/03/icon-1.png" alt="" />
               <img className="two" src="assets/img/icon/slider/03/icon-2.png" alt="" />
               <img className="three" src="assets/img/icon/slider/03/icon-3.png" alt="" />
               <img className="four" src="assets/img/icon/slider/03/icon-4.png" alt="" />
               <img className="five" src="assets/img/icon/slider/03/icon-6.png" alt="" />
               <img className="six" src="assets/img/icon/slider/03/icon-7.png" alt="" />
            </div>
            <div className="hero__item hero__height d-flex align-items-center">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-5 order-last">
                        <div className="hero__thumb-wrapper ml-100 scene p-relative">
                           {/* <div className="hero__thumb one">
                              <img className="layer" data-depth="0.2" src="assets/img/slider/03/slider-1.jpg" alt="" />
                           </div> */}
                           <div className="hero__thumb two d-none d-md-block d-lg-none d-xl-block">
                              <img className="layer" data-depth="0.3" src="assets/img/slider/03/slider-2.jpg" alt="" />
                           </div>
                           <div className="hero__thumb three d-none d-sm-block">
                              <img className="layer" data-depth="0.4" src="assets/img/slider/03/slider-3.jpg" alt="" />
                           </div>
                           <div className="hero__thumb four d-none d-md-block d-lg-none d-xl-block">
                              <img className="layer" data-depth="0.5" src="assets/img/slider/03/slider-4.jpg" alt="" />
                           </div>
                           <iframe
                  className="w-full lg:relative lg:inset-y-0 lg:left-30 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://embed.lottiefiles.com/animation/71003"
                ></iframe>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-7 d-flex align-items-center">
                        <div className="hero__content">
                           <span className='ai'>OneNine AI.</span>
                           <h1>The future of<br />Date Science<br/>is no code</h1>
                           <p>No Code Data Intelligence Platform for Everyone.</p>
                           <Link to="/about" className="z-btn ">Book Demo</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeHeroSection;