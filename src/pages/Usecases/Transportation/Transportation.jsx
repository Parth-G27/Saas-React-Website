import React from 'react';
import Lottie from 'lottie-react';
import plat_Hero1 from './1.json';

const Transportation = () => {

    return (
        <>
        <section className="services__area-3 mt-10 pt-20 pb-40 p-relative" style={{ background: `url(assets/img/bg/3.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }} id="tra">
            
            <div className="about__area-2 pt-10 pl-20">
               <div className="row">
               <div className="col-xl-7 col-lg-5">
                     <div className="about__content pl-10 ">
                        <div className="section__title section__title-3 mb-25 mt-80">
                           <h3 >Transportation</h3>
                        </div>
                        <p className='wee'>Transit Planning</p>
                        <p>Transit planners take in information on a constant basis about scheduling, passenger counts, train and bus frequency, and more. Data about weather, demographics, and health is highly useful to a transit planner. Great visualization helps the planning process. Data representations give planners unique insights into the ways that their ideas will play out in the real world. It also allows planners to communicate effectively with members of the public, and with key decision-makers. Transit planners use visual representations to layer financial and population data into their plans for new transit routes.</p>
                     </div>
                  </div>  
                
                <Lottie className="col-xl-4 col-lg-4 ml-70" speed={null} loop={true} animationData ={plat_Hero1} />
               
               
                                   
               </div>
            </div>  
      </section>

        </>
    )
}
export default Transportation;