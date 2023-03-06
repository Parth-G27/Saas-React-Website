import React from 'react';
import Lottie from 'lottie-react';
import plat_Hero1 from './1.json';

const Finance = () => {

    return (
        <>
        <section className="services__area-3 mt-10 pt-20 pb-40 p-relative" style={{ background: `url(assets/img/bg/3.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }} id="fin">
            
            <div className="about__area-2 pt-10 pl-20">
               <div className="row">
               <div className="col-xl-7 col-lg-5">
                     <div className="about__content pl-10 ">
                        <div className="section__title section__title-3 mb-25 mt-80">
                           <h3 >Finance</h3>
                        </div>
                        <p className='wee'> Fraud Detection and Prevention</p>
                        <p> Use machine learning to flag and combat fraudulent transactions. Fraudulent transactions account for billions of dollars of losses each year. By taking in data points such as customer account history, IP address, and location, the system can automatically approve or disapprove a transaction. </p>
                     </div>
                  </div>  
                
                <Lottie className="col-xl-4 col-lg-4 ml-70" speed={null} loop={true} animationData ={plat_Hero1} />
               
               
                                   
               </div>
            </div>  
      </section>

        </>
    )
}
export default Finance;