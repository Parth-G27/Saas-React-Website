import React from 'react';
import TextAnimation from 'react-text-animations'


const Textanimation = () => {
    return (
       <>
       <section className="hero__area p-relative mt-50 mb-30">
       {/* <div className="hero__item hero__height d-flex align-items-center"> */}
            <div className="container">
               <div className="row">
                  <div className="col-xl-9 col-lg-7 d-flex align-items-center">
                     <div className="section__title section__title-an " data-wow-delay=".2s">
                        <div className='pb-0'>
                            <h4><div className='pb-10'>We Believe</div></h4>
                            <h2><div className='pb-10'>The Future of</div>  <TextAnimation.Scale
                      className="mt-3 mb-3 "
                      animation={{
                        duration: 1500,
                        delay: 4000,
                        timingFunction: 'ease-in-out',
                      }}
                      target="Science"
                      text={['Analytics', 'Visualization', 'Science']}
                    >
                      Data  Science
                    </TextAnimation.Scale>
                    
                    <div className='pt-10 pb-40'>is No Code</div></h2>
                        </div>
                        <h4 className='news'>Build Data Driven Workforce using No Code Data Intelligence Platform.</h4>
                     </div>
                  </div>
               </div>
            </div>
        {/* </div> */}
         </section>
         
          
     </>
    );
 };
 
 export default Textanimation;