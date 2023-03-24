import React, { useState } from 'react';
import HomeTwoSingleCase from '../../../components/HomeTwoSingleCase/HomeTwoSingleCase';
// import featuredWorksData from '../../../data/featuredWorksData';
import test from '../../../data/test';

const allCategories = ['all', ...new Set(test.map(item => item.category))];

const arr = test;
const uniqueItem = arr.filter((arr, index, self) =>
   index === self.findIndex((t) => (t.img === arr.img && t.State === arr.State)))


const Partnerarea = () => {

   const [isActive, setIsActive] = useState('all');
   const [filterGalleryItems, setFilterGalleryItems] = useState(uniqueItem);

   const filterCategory = (category) => {
      setIsActive(category)
      if (category === 'all') {
        return setFilterGalleryItems(uniqueItem);
      }

      const remainingItems = test.filter(item => item.category === category);
      setFilterGalleryItems(remainingItems);
   }

   return (
      <>
         <section className="services__area pt-115 pb-40">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mt-100 mb-0 wow fadeInUp" data-wow-delay=".2s">
                        <h2>OneNineAI Partner Network</h2>   
                     </div>
                  </div>     
               </div>
               </div>
         </section>
         <section className="services__area pt-0 pb-40">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mt-10 mb-0 wow fadeInUp" data-wow-delay=".2s">
                     <a href="https://onenine.atlassian.net/servicedesk/customer/user/login?destination=portals" target="_blank">
                              <button className='z-btn'>Become a Partner</button>
                           </a>
                           {/* <a href="https://calendly.com/onenine/15min?month=2023-03" target="_blank">
                              <button className='z-btn-1'>Book Demo</button>
                           </a>  */}
                     </div>
                  </div>     
               </div>
               </div>
         </section>
         <section className="services__area-2 mt-0 pt-30 pb-140 pl-20 p-relative" style={{ background: ``, backgroundPosition: 'top', backgroundSize: 'cover' }}>      
               <div className="about__area-2 pt-130 pb-60 pl-20">
                  <div className="row text-center">
                    <div className="col-xl-4 col-lg-3">
                        <h1 className='startnow'>Value Added Resellers</h1>
                        
                        <h5 className='acad'>We enable organizations to build custom solution & end-to-end AI pipeline </h5>
                    </div>

                    <div className="col-xl-4 col-lg-3">
                        <h1 className='startnow'>Exclusive Partners</h1>
                        {/* <div className='con2'>
                           
                        </div> */}
                        <h5 className='acad'> With deep understanding of AI lifecycle, we help organizations develop and execute AI strategy </h5>
                    </div>

                    <div className="col-xl-4 col-lg-3">
                        <h1 className='startnow'>Channel Distribution</h1>
                        
                            
                       
                        <h5 className='acad'>All of Data Science is open source, we can help leverage the best tools for your organization</h5>
                        </div>
                    </div>
                    </div>
                    </section>
                    

         {/* <section className="services__area pt-5 pb-0">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mt-0 mb-0 wow fadeInUp" data-wow-delay=".2s">
                        <h3>Value Added Resellers</h3>
                        <h4 className='partner'>OneNine AI Partner Program is a scalable model to help our partners realize the benefits quickly. This program recognizes the partner efforts based on the number of end-user engagements, transactions, and projected channel growth. </h4>
                     </div>
                  </div>
               </div>
               </div>
         </section>
         <section className="services__area pt-5 pb-0">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mt-20 mb-0 wow fadeInUp" data-wow-delay=".2s">
                        <h3>Exclusive Partners</h3>
                        <h4 className='partner'>Our AI Partner Program will support the partners with training, development, marketing, and capability documentation. The AI Partner Program can be customized to accommodate growing business needs and to align with market competition.  </h4>
                     </div>
                  </div>
               </div>
               </div>
         </section>
         <section className="services__area pt-5 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mt-20 mb-0 wow fadeInUp" data-wow-delay=".2s">
                        <h3>Channel Distribution</h3>
                        <h4 className='partner'>Domain specific channel partners in Education, Healthcare, Financial Services & Retail.</h4>
                     </div>
                  </div>
               </div>
               </div>
         </section> */}
         <section className="case__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2">
                     <div className="section__title section__title-3 text-center mb-45">
                        {/* <span>Case Studies</span> */}
                        <h3>Our Partners</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="case__menu text-center mb-40 wow fadeInUp" data-wow-delay=".6s">
                        <div className="masonary-menu filter-button-group">

                           {
                              allCategories.map((category, index) => {
                                 return <button key={index} onClick={() => filterCategory(category)} className={isActive === category ? 'active text-capitalize' : 'text-capitalize'} >{category}</button>
                              })
                           }

                        </div>
                     </div>
                  </div>
               </div>


               <div className='row'>
                  {
                     filterGalleryItems.map((item, index) => <HomeTwoSingleCase key={index} galleryItem={item}
                        index={index} filterGalleryItems={filterGalleryItems} />)
                  }
               </div>

            </div>
         </section>
      </>
   );
};

export default Partnerarea;