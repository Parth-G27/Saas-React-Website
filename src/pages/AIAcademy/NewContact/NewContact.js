import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';

const NewContact = () => {

   const form = useRef();
   
   const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_f3kk1wo',
                       'template_x95psj4',
                        form.current, 
                        'XOzlv2IDQxHObVECY'
                     )
      .then((result) => {
         
         console.log(result.text);
         console.log("message sent");
         e.target.reset();
         alert("Email sent succesfully");
         
      }, (error) => {
         console.log(error.text);
      });
   };
   return (
      <>
         <section className="contact__area" style={{ background: `url(assets/img/bg/wave-bg-2.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
            <div className="container-fluid pb-80" >
               <div className="text-center">
                  <div className="col-xl-12">
                     <div className="contact__map">
                        {/* <iframe title='contact' src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe> */}
                        <div className="contact__wrapper d-md-flex justify-content-between">
                           <div className="contact__info mr-100">
                              <h3>Get in touch</h3>
                              <ul>                    
                                 <li className='footer'>
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
                              <form ref={form} onSubmit={sendEmail}>
                                 <input type="text" name="user_name" placeholder="Your Name"/>
                                    <input type="email" name="user_email" placeholder="Your Email"/>
                                       <textarea name="message" placeholder="Your Message"></textarea>
                                       {/* <input type="submit" value="Send" className="z-btn " /> */}
                                       <button type="submit" className="z-btn" >Send Message</button>
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

export default NewContact;