import React from 'react';
import HomeSingleFeature from '../../../components/HomeSingleFeature/HomeSingleFeature';
import { FiBook, FiLock} from 'react-icons/fi';
import { FaLightbulb, FaRibbon } from 'react-icons/fa';
import { BsHouseDoor } from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';

const Algos = () => {
   return (
      <>
         <section className="features__area pt-190 pb-100 mt--100 wow fadeInUp" data-wow-delay=".5s">
            <div className="container">
               <div className="features__inner fix">
                  <div className="row g-0 ">

                  {/* icon={<FiBook />}
                  icon={<FaLightbulb />}
                  icon={<BsHouseDoor />}
                  icon={<IoDocumentTextOutline />}
                  icon={<FiLock />}  
                  icon={<FaRibbon />} */}

                     <HomeSingleFeature  title="30+ Supervised Learning Algorithms" />
                     <HomeSingleFeature  title="20+ Unsupervised Learning Algorithms" />
                     <HomeSingleFeature  title="10+ Time Series Forecasting Algorithms" />
                     <HomeSingleFeature title="10+ Deep Learning Algorithms" />
                     <HomeSingleFeature title="10+ Anomaly Detection Algorithms" />
                     <HomeSingleFeature  title="30+ Natural Language Processing Technique " />

                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default Algos;