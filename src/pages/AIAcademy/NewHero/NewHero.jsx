import React from 'react';
const NewHero = () => {
    return (
       <>
          <section className="services__area pt-115 pb-40">
            <div className="container">
               <div className="row">
                  <div className="col-xl-10 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mt-100 mb-0 wow fadeInUp" data-wow-delay=".2s">
                        <h2>We are Building Data Driven Workforce of the Future</h2>   
                     </div>
                  </div>     
               </div>
               </div>
         </section>
         <section className="services__area-2 mt-0 pt-30 pb-140 pl-20 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>      
               <div className="about__area-2 pt-130 pb-60 pl-20">
                  <div className="row text-center">
                    <div className="col-xl-6 col-lg-4">
                        <h3>Learn practical AI</h3>
                        <div className=''>
                            <div className="m-img pl-30 pb-50">
                                <img src="assets/img/aiacademy/a.jpg" alt=""/>
                            </div>
                        </div>
                        
                        <h5 className='ser'>Our vision is to create human & AI enabled workforce of the future allowing anyone to build data products to improve their decisions. </h5>
                    </div>

                    <div className="col-xl-6 col-lg-4">
                        <h3>Earn Certificate</h3>
                        <div className=''>
                            <div className="m-img pb-50">
                                <img src="assets/img/aiacademy/aa.jpg" alt=""/>
                            </div>
                        </div>
                        <h5 className='ser'> As AI has become a more significant driver of economic activity, there has been increased interest from organizations to train all the workforce with data driven skillsets.</h5>
                    </div>
                  </div>
               </div>
         </section>

       </>
    );
 };
 
 export default NewHero;