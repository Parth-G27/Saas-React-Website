import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';
import { HashLink } from 'react-router-hash-link'; 

import { FaPlus } from 'react-icons/fa';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const New = () => {
   return (
      <>
         <section className="team__area pt-30 pb-110">
            <div className="container">
            <div className="row align-items-center mb-55">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div className="section__title section__title-3 text-center mt-100 mb-0 wow fadeInUp" data-wow-delay=".2s">
                        <h2>Use Cases Of AI</h2>
                    </div>
                    </div>
               
                  {/* <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4">
                     <div className="team__more d-flex justify-content-sm-end mb-85">
                        <Link to="/team" className="z-btn z-btn-border">View all<i > <CgArrowLongRight /> </i></Link>
                     </div>
                  </div> */}
               </div>
               <div className="row">

               <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6">
                  <HashLink to="#tel"><SingleTeam image="1" name="Berlin Corleone" title="CEO & founder" /></HashLink>
                  <SingleTeam image="2" name="Norman Gordon" title="Associate Consultant" />
                  <SingleTeam image="3" name="Indigo Violet" title="Project Manager" />
               </div>

               <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6">
                  <SingleTeam image="4" name="Dylan Meringue" title="Support" />
                  <SingleTeam image="5" name="Berlin Corleone" title="App Developer" />
                  <SingleTeam image="6" name="Shahnewaz Sakil" title="Web Developer" />
               </div>

               {/* <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6">
                  <SingleTeam image="4" name="Dylan Meringue" title="Support" />
                  <SingleTeam image="5" name="Berlin Corleone" title="App Developer" />
                  <SingleTeam image="6" name="Shahnewaz Sakil" title="Web Developer" />
               </div>

               <div className="col-xl-3 col-lg-5 col-md-6 col-sm-6">
                  <SingleTeam image="4" name="Dylan Meringue" title="Support" />
                  <SingleTeam image="5" name="Berlin Corleone" title="App Developer" />
                  <SingleTeam image="6" name="Shahnewaz Sakil" title="Web Developer" />
               </div> */}

               </div>
            </div>
         </section>
      </>
   );
};

export default New;


{/* <div className="col-xl-3 col-lg-4 col-md-6">
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
         </div> */}