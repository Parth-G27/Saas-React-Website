import React from 'react';

const Info = () =>{

    return (
        <>
        <section className="services__area pt-15 pb-10" style={{ background: `url(assets/img/bg/bg-new.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mt-100 mb-10 wow fadeInUp" data-wow-delay=".2s">
                        <div className='pb-40'>
                            <h2>Signup for Upcoming Class</h2>
                        </div>
                        <h4 className='news pb-50'>Join us on a 6 week journey to learn about AI and how to be data driven</h4>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="services__area pt-25 pb-10" style={{ background: `url(assets/img/bg/bg-new.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div className="section__title section__title-3 mt-10 mb-10 wow fadeInUp" data-wow-delay=".2s">
                        <div className='pb-40 text-center'>
                            <h3>Class Starts Every Quater</h3>
                        </div>
                        <h4 className='rel pt-30 text-center'>1. Introduction to AI and OneNine Cloud</h4> 
                        <ul className='text-center'>
                           <li className='footer' >Machine Learning Concepts</li>
                           <li className='footer' >AI & ML Steps</li>
                        </ul>

                        <h4 className='rel pt-30 text-center'>2. Foundations: Exploratory Data Analysis</h4>
                        <ul className='text-center'>
                            <li className='footer' >Live Demo on OneNine Cloud</li>
                        </ul>

                        <h4 className='rel pt-30 text-center'>2. Foundations: Exploratory Data Analysis</h4>
                        <ul className='text-center'>
                            <li className='footer' >Live Demo on OneNine Cloud</li>
                        </ul>

                        <h4 className='rel pt-30 text-center'>3.  Machine Learning: Deep Dive into AI Model </h4>
                        <ul className='text-center'>
                            <li className='footer' >Live Demo on OneNine Cloud</li>
                        </ul>

                        <h4 className='rel pt-30 text-center'>4.  Deep Learning: Deep Dive into Neural Networks </h4>
                        <ul className='text-center'>
                            <li className='footer' >Introduction to Neural Networks</li>
                        </ul>

                        <h4 className='rel pt-30 text-center'>5.  Next Gen AI: Smart Models</h4>
                        <ul className='text-center'>
                            <li className='footer' >Live Demo on OneNine Cloud</li>
                        </ul>

                        <h4 className='rel pt-30 text-center'>6. Future State of AI</h4>
                        <ul className='text-center'>
                            <li className='footer' >Live Demo on OneNine Cloud</li>
                        </ul>

                        


                     </div>
                  </div>
               </div>
            </div>
         </section>

         </>
    );
}
export default Info;