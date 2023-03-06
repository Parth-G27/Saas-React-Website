import React from 'react';
import Lottie from 'lottie-react';
import plat_Hero1 from './1.json';

const Government = () => {

    return (
        <>
        <section className="services__area-2 mt-20 pt-10 pb-0 p-relative" style={{ background: `url(assets/img/bg/bg-new.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }} id="gov"> 
            <div className="about__area-2 pt-130 pl-20">
                <div className="row">
                    <Lottie className="col-xl-3 col-lg-3" speed={null} loop={true} animationData ={plat_Hero1} />
                    <div className="col-xl-7 col-lg-5">
                        <div className="about__content pl-140">
                            <div className="section__title section__title-3 mb-20 mt-30 ">
                                <h3>Government</h3>
                            </div>
                            <p className="wee">Identify Fraduelent Benefit Claims</p>
                            <p >Fraduenlent benefit claims usually follow patterns. For example a person might use the same phone number for multiple benefit claims. Using OneNine AI we can detect these patterns and ensure fraudulent benefit claims don’t happen. </p>                           
                        </div>
                    </div>                     
                </div>
            </div>  
        </section>

        </>
    )
}
export default Government;