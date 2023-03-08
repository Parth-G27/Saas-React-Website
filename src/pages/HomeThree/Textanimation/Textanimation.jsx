import React from 'react';
import TextAnimation from 'react-text-animations'


const Textanimation = () => {
    return (
       <>
       <section className="services__area pt-115 pb-10">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-an text-center mt-100 mb-10 wow fadeInUp" data-wow-delay=".2s">
                        <div className='pb-40'>
                            <h2>The Future of <TextAnimation.Scale
                      className="mt-3 mb-3 "
                      animation={{
                        duration: 1500,
                        delay: 4000,
                        timingFunction: 'ease-in-out',
                      }}
                      target="Science"
                      text={['Analytics', 'Visualization', 'Science']}
                    >
                      Data Science
                    </TextAnimation.Scale>
                                 is No Code</h2>
                        </div>
                        <h4 className='news'>Build Data Driven Workforce using No Code Data Intelligence Platform.</h4>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         
          
     </>
    );
 };
 
 export default Textanimation;