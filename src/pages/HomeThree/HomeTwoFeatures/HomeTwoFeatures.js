import React from 'react';
// import { BiLock } from 'react-icons/bi';
import { CgArrowLongRight } from 'react-icons/cg';
// import { FaLightbulb, FaRibbon } from 'react-icons/fa';
// import { IoDocumentTextOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { TbHandClick } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa";
import { RiOpenSourceFill } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import HomeTwoSingleFeature from '../../../components/HomeTwoSingleFeature/HomeTwoSingleFeature';

const HomeTwoFeatures = () => {
   return (
      <>
         <section className="features__area pt-115 pb-70">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-6">
                     <div className="features__content-left">
                        <div className="section__title section__title-h2 mb-25">
                           <span>Our Features</span>
                           {/* <h2>Enrich <br/> your design</h2> */}
                        </div>
                        <h2>Create Human & AI embeded workforce of the future allowing anyone to build data products to improve their predictions.</h2>
                        <br/>
                        <br/>
                        <Link to="/about" className="z-btn">What we do<i><CgArrowLongRight/></i></Link>
                     </div>
                  </div>
                  <div className="col-xl-6 offset-xl-1 col-lg-6">
                     <div className="features__content-right">
                        <div className="row">
                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">

                              <HomeTwoSingleFeature icon={<TbHandClick />} title="One Click Automated Data Analysis" />
                              <HomeTwoSingleFeature icon={<GiCheckMark />} title="No Code EasyAI & Easy DL " />
                              

                           </div>

                           <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">

                              <HomeTwoSingleFeature icon={<FaRegChartBar />} title="Self Service Visualization" />
                              <HomeTwoSingleFeature icon={<RiOpenSourceFill />} title="Open Source Data" />

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoFeatures;