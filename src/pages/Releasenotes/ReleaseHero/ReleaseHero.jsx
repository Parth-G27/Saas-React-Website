import React from 'react';

const ReleaseHero = () =>{

    return (
        <>
        <section className="services__area pt-115 pb-10">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mt-100 mb-10 wow fadeInUp" data-wow-delay=".2s">
                        <div className='pb-40'>
                            <h2>Release summary</h2>
                        </div>
                        <h4 className='news pb-50'>Our No Code Data Intelligence Platform reduces entry barriers for individuals and businesses to start using AI and machine learning.</h4>
                        <a href="https://calendly.com/onenine/15min?month=2023-03" target="_blank" className="z-btn">Start Now</a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="services__area pt-115 pb-10">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div className="section__title section__title-3 text-center mt-100 mb-10 wow fadeInUp" data-wow-delay=".2s">
                        <div className='pb-40'>
                            <h3>2022.11.0-elite</h3>
                        </div>
                        <h4 className='rel'>This release of the OneNine AI Cloud Platform includes new enhancements and bug fixes:</h4>
                     </div>
                  </div>
               </div>
            </div>
         </section>

        </>
    )
}
export default ReleaseHero;