import React from 'react';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';

const HomeContact = () => {
   return (
      <>
         <section className="contact__area">
            <div className="container-fluid p-0" style={{ background: `url(assets/img/bg/wave-bg-2.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
               <div className="row g-0">
                  <div className="col-xl-12">
                     <div className="contact__map">
                        {/* <iframe title='contact' src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe> */}
                        <div className="contact__wrapper d-md-flex justify-content-between">
                           <div className="contact__info mr-100">
                              <h3>Get in touch</h3>
                              <ul>                    
                                 <li>
                                    <h4>Email Address</h4>
                                    <p><a href="mailto:support@onenine.ai">support@onenine.ai</a></p>
                                 </li>
                              </ul>
                              <div className="footer__social theme-social pt-60">
                                 <ul>
                                 <li>
                                    <a href="https://www.linkedin.com/company/onenine-ai/" target="_blank" >
                                       <i ><FaLinkedin /></i>
                                       <i ><FaLinkedin /></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="https://twitter.com/Onenineai" target="_blank">
                                       <i ><FaTwitter /> </i>
                                       <i ><FaTwitter /> </i>
                                    </a>
                                 </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="contact__form">
                              <form action="#">
                                 <input type="text" placeholder="Your Name"/>
                                    <input type="email" placeholder="Your Email"/>
                                       <textarea placeholder="Your Message"></textarea>
                                       <button type="button" className="z-btn " >Send Message</button>
                                    </form>
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

export default HomeContact;