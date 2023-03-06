import React from 'react';
import Lottie from 'lottie-react';
import plat_Hero1 from './1.json';

const Healthcare = () => {

    return (
        <>
        <section className="services__area-3 mt-10 pt-20 pb-40 p-relative" style={{ background: `url(assets/img/bg/3.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }} id="hel">
            
            <div className="about__area-2 pt-10 pl-20">
               <div className="row">
               <div className="col-xl-7 col-lg-5">
                     <div className="about__content pl-10 ">
                        <div className="section__title section__title-3 mb-25 mt-80">
                           <h3 >Healthcare</h3>
                        </div>
                        <p className='wee'>Clinical Documentation Classification</p>
                        <p>NLP applications that can understand and classify clinical documentation. NLP systems can analyze unstructured clinical notes on patients, giving incredible insight into understanding quality, improving methods, and better results for patients.</p>
                     </div>
                  </div>  
                
                <Lottie className="col-xl-4 col-lg-4 ml-70" speed={null} loop={true} animationData ={plat_Hero1} />
               
               
                                   
               </div>
            </div>  
      </section>

        </>
    )
}
export default Healthcare;