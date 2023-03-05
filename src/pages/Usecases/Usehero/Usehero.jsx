import React from 'react';
import { Link } from 'react-router-dom';
import Usercards from '../Usecards/Usecards';
import Case from '../../../components/Case/Case';
import test from './test';
const Usehero = () => {


    return (
    <>
        <section className="services__area pt-115 pb-80" id="new_hero">
            <div className="container">
                <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div className="section__title section__title-3 text-center mt-100 mb-0 wow fadeInUp" data-wow-delay=".2s">
                        <h2>Use Cases Of AI</h2>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <Usercards/> */}

        <div className="pl-5">
                     <div className="features__content-right">
                        <div className="row">

                           <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6">
                            
                              {/* <Case title="Telecommunications" /> */}
                                <div className="features__itemm features__itemm-2 white-bg fix mb-30">
                                    <div className="features__thumb-2" style={{background: `assets/img/usecases/R.jpg`, backgroundPosition: 'center', backgroundSize: 'cover'}} ></div>
                                        <div className="features__content-2">
                                        <h3>Telecommunications</h3>
                                    </div>
                                </div>

                            
                            <Case title="Construction" />
                            

                              

                             

                           </div>

                           <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6">
                              <Case  title="Healthcare" />
                              <Case  title="Transportation" />
                           </div>

                           <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6">
                              <Case  title="Agriculture" />
                              <Case  title="Government " />
                           </div>

                           <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6">
                              <Case  title="Finance" />
                              <Case  title=" Food Services" />
                           </div>
                           
                        </div>
                     </div>
                  </div>

       
       
    </>
   );
};

export default Usehero;

