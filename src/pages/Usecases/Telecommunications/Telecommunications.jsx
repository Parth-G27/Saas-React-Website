import React from 'react';
import Lottie from 'lottie-react';
import plat_Hero1 from './1.json';

const Telecommunications = () => {

    return (
        <>
        <section className="services__area-2 mt-50 pt-70 pb-0 p-relative" style={{ background: `url(assets/img/bg/bg-new.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }} id="tel"> 
            <div className="about__area-2 pt-130 pl-20">
                <div className="row">
                    <Lottie className="col-xl-3 col-lg-3" speed={null} loop={true} animationData ={plat_Hero1} />
                    <div className="col-xl-7 col-lg-5">
                        <div className="about__content pl-140">
                            <div className="section__title section__title-3 mb-20 mt-30 ">
                                <h3>Telecommunications</h3>
                            </div>
                            <p className="wee">Predict Churn among customers</p>
                            <p > One of the most common uses of predictive models is using them to predict churn rate among your customers. The term churn rate means the rate at which customers stop doing business with an entity. Algorithms like random forest or logistic regression can be used to predict whether customers will cancel a subscription or stop using a service.</p>                           
                        </div>
                    </div>                     
                </div>
            </div>  
        </section>

        </>
    )
}
export default Telecommunications
;