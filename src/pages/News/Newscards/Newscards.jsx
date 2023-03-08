import React from 'react';
// import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg';
// import { FiPlay } from 'react-icons/fi';
// import { IoEllipsisHorizontal } from 'react-icons/io5';
// import { Link } from 'react-router-dom';
import Newsitem from '../../../components/Newsitem/Newsitem';
import VideoPopup from '../../../components/VideoPopup/VideoPopup';
import useGlobalContext from '../../../hooks/useGlobalContext';
// import BlogLeftSideBar from './BlogLeftSideBar';

const BlogsArea = () => {
   const { setIsVideoOpen} = useGlobalContext();
   return (
      <>
         <VideoPopup videoId="yJg-Y5byMMw"/>

         <section className="blog__area pt-70 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-5">
                     <div className="blog__wrapper mr-50">

                        <Newsitem to="newsdetails1" date="December 14, 2021" image="2" name="Ravi Trivedi" title="Launching OneNineAI Academy" desc="We are very excited to launch OneNine AI Academy, introducing an innovative way of learning AI.  Innovative Learning approach focuses on solving real world challenges and reducing entry barriers for students & individuals" />

                        </div>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                     <div className="blog__wrapper mr-50">

                     <Newsitem to="newsdetails2" date="August 15, 2021" image="4" name="Ravi Trivedi" title="OneNineAI partners with a top public research university" desc="We are excited to announce our partnership with NJIT, a top public research university conducting world-class technological research. This partnership will help us bring best of academic research to our platform while"/>


                        </div>
                  </div>

                  <div className="col-xl-6 col-lg-5">
                     <div className="blog__wrapper mr-50">

                     <Newsitem to="newsdetails3" date="August 15, 2021" image="5" name="Ravi Trivedi" title="Discover being data driven with OneNine Cloud" desc="Everyone can be data driven. We are on a journey to help students, parents & general workforce to be data driven using power of Data Analysis, Machine Learning, Deep Learning, AI and Cloud Computing. Our platform automates"/>


                        </div>
                  </div>

                  <div className="col-xl-6 col-lg-5">
                     <div className="blog__wrapper mr-50">

                     <Newsitem to="newsdetails4" date="August 15, 2021" image="6" name="Ravi Trivedi" title="Future State of AI" desc="As Artificial intelligence becomes mainstream, organizations are looking for faster ways to develop & integrate it within their key products. You have probably heard that developing AI requires lots of data observations, so a machine can learn"/>


                        </div>
                  </div>

                        {/* <Newsitem image="3" user_image="2" name="Weir Doe" title="The Importance of Instagram Metrics and Where to Find Them!" video_icon={<div className="blog__play p-absolute">
                           <button onClick={() => setIsVideoOpen(true)} data-fancybox> <i> <FiPlay/> </i></button>
                        </div>} /> */}

                        {/* <div className="blog__quote mb-50 p-relative white-bg fix" >
                           <div className="blog__quote-line">
                              <img className="line-1" src="assets/img/icon/blog/line-1.png" alt="" />
                              <img className="line-2" src="assets/img/icon/blog/line-2.png" alt="" />
                           </div>
                           <div className="quote mb-10">
                              <img src="assets/img/icon/blog/quote-1.png" alt="" />
                           </div>
                           <div className="quote-2 p-absolute">
                              <img src="assets/img/icon/blog/quote-2.png" alt="" />
                           </div>
                           <blockquote>
                              <p>Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your
                                 bike mate don't get shirty with me super, Jeffrey bobby Richard cheesed off spend a penny
                                 a load of old tosh blag horse.</p>
                           </blockquote>
                           <h4>Shahnewaz Sakil</h4>
                        </div> */}

                        {/* <Newsitem image="4" name="Weir Doe" title="We craft marketing & digital products that grow businesses." /> */}

                        {/* <div className="blog__quote blog__quote-2 mb-50 p-relative white-bg fix"
                        >
                           <div className="blog__quote-line">
                              <img className="line-3" src="assets/img/icon/blog/line-3.png" alt="" />
                              <img className="line-4" src="assets/img/icon/blog/line-4.png" alt="" />
                           </div>
                           <div className="blog__link-icon">
                              <i className="icon_link_alt icon_1"></i>
                              <i className="icon_link_alt icon_2"></i>
                           </div>
                           <p>Oxford ruddy off his nut, bum bag is lavatory baking cakes bubble and squeak cheesed off what
                              a plonker.!</p>
                        </div> */}

                        {/* <Newsitem image="5" name="Indigo Violet" title="TikTok Influencer Marketing: How to Work With Influencers" /> */}

                        {/* <div className="basic-pagination" >
                           <ul>
                              <li>
                                 <Link to="/blogs">
                                    <i > <CgArrowLongLeft /> </i>
                                    <i > <CgArrowLongLeft /> </i>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/blogs">
                                    <span>1</span>
                                    <span>1</span>
                                 </Link>
                              </li>
                              <li className="active">
                                 <Link to="/blogs">
                                    <span>2</span>
                                    <span>2</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/blogs">
                                    <span>3</span>
                                    <span>3</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/blogs">
                                    <i ><IoEllipsisHorizontal/></i>
                                    <i ><IoEllipsisHorizontal /></i>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/blogs">
                                    <i > <CgArrowLongRight /> </i>
                                    <i > <CgArrowLongRight /> </i>
                                 </Link>
                              </li>
                           </ul>
                        </div> */}
                     

                  {/* <BlogLeftSideBar/> */}
               </div>
            </div>
         </section>
      </>
   );
};

export default BlogsArea;