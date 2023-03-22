import React from 'react';
import Cap_ser from '../../../components/Cap_ser/Cap_ser';
//import { TbHandClick } from "react-icons/tb";
import {MdOnlinePrediction, MdBuild} from "react-icons/md";
import {AiOutlineBarChart, AiFillCheckCircle, AiOutlineUserAdd, AiFillBulb} from "react-icons/ai";
import {RiBarChart2Line} from "react-icons/ri";
import {BsDatabaseUp, BsCodeSlash, BsGraphUpArrow} from "react-icons/bs";
import {DiOpensource} from "react-icons/di";

const Capacity = () => {
   return (
      <>
         <section className="services__area pt-115 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-70 wow fadeInUp" data-wow-delay=".2s">
                        {/* <span>Highlights</span> */}
                        <h2>Platform Capability</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  <Cap_ser icon={<MdOnlinePrediction />} title="Online & Batch Prediction" />
                  <Cap_ser icon={<AiOutlineBarChart />} title="200+ Charts & Visualization" />
                  <Cap_ser icon={<RiBarChart2Line />} title="300+ Machine Learning models" />
                  <Cap_ser icon={<BsDatabaseUp />} title="Clean & Transform Data within seconds" />
                  <Cap_ser icon={<MdBuild />} title="Build & Deploy within minutes" />
                  <Cap_ser icon={<AiFillCheckCircle />} title="Smart Models - Just provide the data and select what you want predict" />
                  <Cap_ser icon={<BsCodeSlash />} title="No Code AI & DL" />
                  <Cap_ser icon={<BsGraphUpArrow />} title="Self-service Visualization without past experience" />
                  <Cap_ser icon={<DiOpensource />} title="Search & Use Open Source Data" />
                  <Cap_ser icon={<AiOutlineUserAdd />} title="Integrate Collaboration Features" />
                  <Cap_ser icon={<AiFillBulb />} title="Automatic & on-demand Scaling" />

                 

               </div>
            </div>
         </section>
      </>
   );
};

export default Capacity;