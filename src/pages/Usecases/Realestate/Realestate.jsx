import React from 'react';
import Lottie from 'lottie-react';
import plat_Hero1 from './1.json';

const RealEstate = () => {

    return (
        <>
        <section className="services__area-2 mt-10 pt-20 pb-0 p-relative" style={{ background: `url(assets/img/bg/bg-new.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }} id="rea"> 
            <div className="about__area-2 pt-130 pl-20">
                <div className="row">
                    <Lottie className="col-xl-3 col-lg-3" speed={null} loop={true} animationData ={plat_Hero1} />
                    <div className="col-xl-7 col-lg-5">
                        <div className="about__content pl-140">
                            <div className="section__title section__title-3 mb-20 mt-30 ">
                                <h3>Real Estate</h3>
                            </div>
                            <p className="wee">Find high-potential leads of buyers on houses</p>
                            <p>Real estate agents will be able to sift through large lists of clients to find leads, and find the clients that would be most probable to buy a certain property by entering a CSV of clients and their property preferences, as well as a property listing.</p>
                        </div>
                    </div>                     
                </div>
            </div>  
        </section>

        </>
    )
}
export default RealEstate;