import React from 'react';

const Faq = () => {
   return (
      <>
         <section className="faq__area p-relative pt-65 pb-120 grey-bg-12 pl-40">
            
                  <div className="col-xl-9  col-lg-6  col-md-7">
                     <div className="faq__wrapper">
                        <div className="section__title section__title-3 mb-55 pl-25 wow fadeInUp" data-wow-delay=".2s">
                           <span>Frequently Asked Questions</span>
                           <h4>Please reach us at <a href='mailto:support@onenine.ai'className='sup'>support@onenine.ai</a> if you cannot find an answer to your question.</h4>
                        </div>

                        <div className="accordion" id="accordionExample">

                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingOne">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How can OneNine Platform help me with data literacy?
                                    </button>
                                 </h5>
                              </div>

                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                 Currently, Artificial Intelligence (AI) is only accessible to a selected few who can code and requires significant investment. Existing AI solutions are costly, complicated & hard to use. We are on a mission to make AI and data intelligence affordable and accessible to everyone. Our no code platform enables organizations and employees to utilize the benefits of AI without needing any coding background.  The platform enables faster democratization using self-service wizard-based interfaces for data analysis, data visualization, smart predictive models & real time prediction features. 
                                 </div>
                              </div>
                           </div>

                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingTwo">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    I need help with a specific feature or have a new feature request
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                 Once you login to OneNine Dashboard, you have full access to documentation and video tutorial on all platform features. We also provide 24X7 support. Create a ticket on OneNine Portal and one of our team members will reach out to you within 24 hours:<a href='https://onenine.atlassian.net/servicedesk/customer/user/login?destination=portals' target="_blank" className='sup'>https://onenine.atlassian.net/servicedesk/customer/user/login?destination=portals</a> 
                                 </div>
                              </div>
                           </div>

                           <div className="card accordion-item">
                              <div className="accordion-header" id="headingThree">
                                 <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Can we run OneNine on our cloud or data center?
                                    </button>
                                 </h5>
                              </div>
                              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                 <div className="card-body accordion-body">
                                 Yes, OneNine Platform can run on AWS Cloud, Google Cloud Platform, IBM Cloud or Microsoft Azure Cloud or private data center. Please reach out to <a href='mailto:support@onenine.ai' className='sup'>support@onenine.ai</a> for Enterprise License.
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

export default Faq;