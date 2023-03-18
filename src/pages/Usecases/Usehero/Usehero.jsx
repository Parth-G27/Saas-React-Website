import React from 'react';
import { Link } from 'react-router-dom';
import Usercards from '../Usecards/Usecards';
import Case from '../../../components/Case/Case';
// import test from './test';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; 
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
                              <HashLink to="#tel">
                                <div className="case__item mb-30 fix">
                                    <div className="case__thumb w-img p-relative">
                                        <img src="assets/img/case/case-3.jpg" alt="case" />
                                        <div className="case__info p-absolute transition-3">
                                            <h4>Telecommunications</h4>
                                        </div>
                                        <div className="case__info case__info-2 p-absolute transition-3">
                                            <h4>Telecommunications</h4>
                                        </div>
                                    </div>
                                </div>
                                </HashLink>

                                <HashLink to="#con">
                                <div className="case__item mb-30 fix">
                                    <div className="case__thumb w-img p-relative">
                                        <img src="assets/img/case/case-3.jpg" alt="case" />
                                        <div className="case__info p-absolute transition-3">
                                            <h4>Construction</h4>
                                        </div>
                                        <div className="case__info case__info-2 p-absolute transition-3">
                                            <h4>Construction</h4>
                                        </div>
                                    </div>
                                </div>
                                </HashLink>

                                <HashLink to="#rea">
                                <div className="features__itemm features__itemm-2 white-bg fix mb-30">
                                    <div className="features__thumb-2" style={{background: `assets/img/usecases/R.jpg`, backgroundPosition: 'center', backgroundSize: 'cover'}} ></div>
                                        <div className="features__content-2">
                                        <h3>Real Estate</h3>
                                    </div>
                                </div>
                                </HashLink>
                            
                           </div>

                           <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6">

                            
                              <HashLink to="#hel">
                              
                              <div className="team__item p-relative text-center fix mb-30">
               <div className="team__thumb mb-25">
                  <img src={`assets/img/team/team-5.jpg`} alt="team"/>
                     <div className="team__info text-start">
                     <h3><Link to="/teamDetails">Name</Link></h3>
                        <span>Title</span>
                     </div>
               </div>
               <div className="team__content">
                  <h3><Link to="/teamDetails">Name</Link></h3>
                  <span>Title</span>
               </div>
            </div>

                                </HashLink>

                                <HashLink to="#tra">
                                <div className="features__itemm features__itemm-2 white-bg fix mb-30">
                                    <div className="features__thumb-2" style={{background: `assets/img/usecases/R.jpg`, backgroundPosition: 'center', backgroundSize: 'cover'}} ></div>
                                        <div className="features__content-2">
                                        <h3>Transportation</h3>
                                    </div>
                                </div>
                                </HashLink>

                           </div>

                           <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6">

                               <HashLink to="#agr">
                                <div className="features__itemm features__itemm-2 white-bg fix mb-30">
                                    <div className="features__thumb-2" style={{background: `assets/img/usecases/R.jpg`, backgroundPosition: 'center', backgroundSize: 'cover'}} ></div>
                                        <div className="features__content-2">
                                        <h3>Agriculture</h3>
                                    </div>
                                </div>
                                </HashLink>

                                <HashLink to="#gov">
                                <div className="features__itemm features__itemm-2 white-bg fix mb-30">
                                    <div className="features__thumb-2" style={{background: `assets/img/usecases/R.jpg`, backgroundPosition: 'center', backgroundSize: 'cover'}} ></div>
                                        <div className="features__content-2">
                                        <h3>Government</h3>
                                    </div>
                                </div>
                                </HashLink>

                              
                              {/* <HashLink to="#agr" smooth><Case  title="Agriculture" /></HashLink>
                              <Case  title="Government " /> */}

                           </div>

                           <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6">

                           <HashLink to="#fin">
                                <div className="features__itemm features__itemm-2 white-bg fix mb-30">
                                    <div className="features__thumb-2" style={{background: `assets/img/usecases/R.jpg`, backgroundPosition: 'center', backgroundSize: 'cover'}} ></div>
                                        <div className="features__content-2">
                                        <h3>Finance</h3>
                                    </div>
                                </div>
                                </HashLink>


                                <HashLink to="#foo">
                                <div className="features__itemm features__itemm-2 white-bg fix mb-30">
                                    <div className="features__thumb-2" style={{background: `assets/img/usecases/R.jpg`, backgroundPosition: 'center', backgroundSize: 'cover'}} ></div>
                                        <div className="features__content-2">
                                        <h3>Food Services</h3>
                                    </div>
                                </div>
                                </HashLink>
                            

                              {/* <Case  title="Finance" />
                              <HashLink to="#tel" smooth><Case  title=" Food Services" /></HashLink> */}
                              
                              
                           </div>
                           
                        </div>
                     </div>
                  </div>
                 
       
       
    </>
   );
};

export default Usehero;

