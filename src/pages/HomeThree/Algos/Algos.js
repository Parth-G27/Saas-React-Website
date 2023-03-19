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

                     <HomeSingleFeature icon={<FiBook />} title="algorithm-1" />
                     <HomeSingleFeature icon={<FaLightbulb />} title="algorithm-2" />
                     <HomeSingleFeature icon={<BsHouseDoor />} title="algorithm-3" />
                     <HomeSingleFeature icon={<IoDocumentTextOutline />} title="algorithm-4" />
                     <HomeSingleFeature icon={<FiLock />} title="algorithm-5" />
                     <HomeSingleFeature icon={<FaRibbon />} title="algorithm-6" />

                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default Algos;