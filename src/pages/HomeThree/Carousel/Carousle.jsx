import React from 'react';
import HomeTwoSingleBlog from '../../../components/HomeTwoSingleBlog/HomeTwoSingleBlog';
// import { CgArrowLongRight } from 'react-icons/cg';
// import { Link } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Reviews = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

   return (
      <>
         <section className="blog__area grey-bg-15 pt-200 mb-40">
            
            <div className="container">
               <div className="row">
                  <div className="col-xl-5">
                     <div className="section__title section__title-3 mb-35">
                        <span>Reviews</span>
                        <h2>Client reviews</h2>
                     </div>
                  </div>
              </div>
            </div>

            <Carousel responsive={responsive} >
             {/* infinite={true} */}
                
                <HomeTwoSingleBlog date="8/7/2022" bold="Easy to use : " name="a Fedral Contractor" desc=" I was able to generate insights in minutes and was able to complete data projects in days vs months" />
                <HomeTwoSingleBlog date="8/1/2022" bold="Using in Classroom : " name="a Professor & Researcher" desc="My students were able to learn and develop AI use cases very fast using OneNine Platform" />
                <HomeTwoSingleBlog date="8/8/2022" bold="No Code is Better : " name="a Graduate Student" desc="Learned a lot about the platform during training sessions. I can easily develop predictive models using Smart Model feature" />
                <HomeTwoSingleBlog date="8/8/2022" bold="Great Product : " name="a Graduate Student" desc="Very comprehensive platform for everyone. I was able to to develop & test multiple use cases of AI. Platform helped me learn data science, data vizualization, NLP & NLU." />
                
            </Carousel>
            
         </section>
      </>
   );
};

export default Reviews;