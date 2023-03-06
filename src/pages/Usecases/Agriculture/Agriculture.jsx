import React from 'react';
import Lottie from 'lottie-react';
import plat_Hero1 from './1.json';

const Agriculture = () => {

    return (
        <>
        <section className="services__area-2 mt-50 pt-70 pb-0 p-relative" style={{ background: `url(assets/img/bg/bg-new.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }} id="agr"> 
            <div className="about__area-2 pt-130 pl-20">
                <div className="row">
                    <Lottie className="col-xl-3 col-lg-3" speed={null} loop={true} animationData ={plat_Hero1} />
                    <div className="col-xl-7 col-lg-5">
                        <div className="about__content pl-140">
                            <div className="section__title section__title-3 mb-20 mt-30 ">
                                <h3>Agriculture</h3>
                            </div>
                            <p className="wee">Data Visualization for Crop Yield</p>
                            <p>Use drone imaging for data visualization to improve crop yield. The drone image can map the field and OneNine AI’s predictive models and data visualization can predict diseases andhelp cut crop crop loss.</p>
                        </div>
                    </div>                     
                </div>
            </div>  
        </section>

        </>
    )
}
export default Agriculture;