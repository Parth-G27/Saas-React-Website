//import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HomeTwoSingleBlog = ({date,name,desc,bold}) => {
   return (
      <>
         <div className="pl-40 pr-40 ">
            <div className="blog__item p-relative fix mb-10 white-bg">
               <div className="blog__thumb" style={{background: `` , backgroundPosition: 'center', backgroundSize: 'cover' }} ></div>
               <div className="blog__content">
                  <div className="blog__meta user mb-15">
                     <span className='pb-25'>By <Link to="/">{name}</Link></span>
                     <h3>
                        <span className='review'>{bold}</span>{desc}
                     </h3>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeTwoSingleBlog;




{/* <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="blog__item p-relative fix mb-10 white-bg">
               <div className="blog__thumb" style={{background: `` , backgroundPosition: 'center', backgroundSize: 'cover' }} ></div>
               <div className="blog__content"> */}
               {/* <div className="team__thumb mb-25">
               <img src={`assets/img/team/team-1.jpg`} alt="team"/>
                </div> */}

               
                  {/* <div className="blog__meta date mb-45">
                     <h4>{date}</h4>
                  </div> */}

                  // <div className="blog__meta user mb-15">
                  //    <span className='pb-25'>By <Link to="/">{name}</Link></span>
                  //    <h3>
                  //       <span className='review'>{bold}</span>{desc}
                  //    </h3>
                  // </div>
                  
                  {/* <div className="blog__btn">
                     <Link to="/blogDetails" className="link-btn-2">
                 Read More
                        <i > <CgArrowLongRight /> </i>
                        <i > <CgArrowLongRight /> </i>
                     </Link>       
                  </div> */}
         //       </div>
         //    </div>
         // </div>