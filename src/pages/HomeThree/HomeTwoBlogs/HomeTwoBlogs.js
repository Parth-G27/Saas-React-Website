import React from 'react';
import HomeTwoSingleBlog from '../../../components/HomeTwoSingleBlog/HomeTwoSingleBlog';
// import { CgArrowLongRight } from 'react-icons/cg';
// import { Link } from 'react-router-dom';

const HomeTwoBlogs = () => {
   return (
      <>
         <section className="blog__area grey-bg-15 pt-100 pb-45">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5">
                     <div className="section__title section__title-3 mb-35">
                        <span>Reviews</span>
                        <h2>Client review</h2>
                     </div>
                  </div>
               </div>
               <div className="row">

                  {/* <HomeTwoSingleBlog date="7/27/2022" name="Sr Advisor to CIO, IRS" desc="Very comprehensive platform for everyone. I was able to develop & test multiple AI use cases for leaning organizations. Platform helped me learn data science, data visualization, NLP, NLU and fundamentals." /> */}
                  <HomeTwoSingleBlog date="8/7/2022" name="a Fedral Contractor" desc="I was able to generate insights in minutes and was able to complete data projects in days vs months" />
                  <HomeTwoSingleBlog date="8/1/2022" name="a Professor & Researcher" desc="My students were able to learn and develop AI use cases very fast using OneNine Platform" />
                  <HomeTwoSingleBlog date="8/8/2022" name="a Graduate Student" desc="Learned a lot about the platform during training sessions. I can easily develop predictive models using Smart Model feature" />

               </div>
               {/* <div className="row">
                  <div className="col-xl-12">
                     <div className="blog__more mt-60">
                        <Link to="/blogs" className="z-btn z-btn-border">View all News
                           <i > <CgArrowLongRight /> </i>
                        </Link>
                     </div>
                  </div>
               </div> */}
            </div>
         </section>
      </>
   );
};

export default HomeTwoBlogs;