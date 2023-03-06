import React from 'react';
import Lottie from 'lottie-react';
import plat_Hero1 from './1.json';

const Construction = () => {

    return (
        <>
        <section className="services__area-2 mt-20 pt-10 pb-0 p-relative" style={{ background: `url(assets/img/bg/bg-new.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }} id="con"> 
            <div className="about__area-2 pt-130 pl-20">
                <div className="row">
                    <Lottie className="col-xl-3 col-lg-3" speed={null} loop={true} animationData ={plat_Hero1} />
                    <div className="col-xl-7 col-lg-5">
                        <div className="about__content pl-140">
                            <div className="section__title section__title-3 mb-20 mt-30 ">
                                <h3>Construction</h3>
                            </div>
                            <p className="wee">Create Visualization to understand workplace injuries</p>
                            <p >Utilize the Exploratory Data Analysis tool to generate charts and graphs. With the EDA, you can view your uploaded data and see where things may need to be improved on a worksite, where there may be some hazards, etc. The EDA provides many insightful charts as well as basic stats about the data.</p>                           
                        </div>
                    </div>                     
                </div>
            </div>  
        </section>

        </>
    )
}
export default Construction;