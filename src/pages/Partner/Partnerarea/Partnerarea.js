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
         <section className="services__area pt-115 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mt-100 mb-0 wow fadeInUp" data-wow-delay=".2s">
                        <h2>OneNineAI Partner Program</h2>
                     </div>
                  </div>
               </div>
               </div>
         </section>
         <section className="case__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2">
                     <div className="section__title section__title-3 text-center mb-45">
                        {/* <span>Case Studies</span> */}
                        {/* <h3>OneNineAI’s growing ecosystem of partners helps our customers implement and integrate AI-driven solutions across the enterprise. Find out more.</h3> */}
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