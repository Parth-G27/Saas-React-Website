import React from 'react';
import { useState } from 'react';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {

   const [formState,setFormState]= useState({});

   // const config = {
   //    Username : 'testing19emailnowplswork@yopmail.com',
   //    Password : 'DC6F1F01BB0B3F7ABE743418F6136F166053',
   //    Host : 'smtp.elasticemail.com',
   //    Port : 2525,
   //    To : 'them@website.com',
   //    From : "you@isp.com",
   //    Subject : "This is the subject",
   //    Body : "And this is the body"
   // };

   const changeHandler = (event) =>{
      setFormState({...formState,[event.target.name]: event.target.value});
   };

   const submitHandler = (event) => {
      event.preventDefault();
      const config = {
         // Username : 'automation@onenine.ai',
         // Password : 'newAutomationBot',
         // Host: "mail.privateemail.com",
         Username : 'lkj098asd123g@gmail.com',
         Password : '',
         Host : 'smtp.gmail.com',
         // Host : 'smtp.elasticemail.com',
         Port : 465,
         To : 'automation@onenine.ai',
         From : formState.email,
         Subject : "This is he form of my contact form",
         Body : `${formState.name} connected to you through E-mail`
      };

      if(window.Email){
         window.Email.send(config).then(() => alert("Email sent succesfully"));
      }
   };

   // var transporter = nodemailer.createTransport({ 
   //    host: 'mail.privateemail.com', 
   //    port: 587, 
   //    secureConnection: true, 
   //    auth: { 
   //      user: process.env.SMTP_USERNAME, 
   //      pass: process.env.SMTP_PASSWORD 
   //    } 
   //  });
   //  var mailOptions = { 
   //    from: 'no-reply@**.com', 
   //    to: user.email, 
   //    subject: 'Reset Password', 
   //    text: 'Hello,\n\n' 
   //      + 'Please reset your password by clicking the link: \nhttp://' 
   //      + req.headers.host + '/confirmation/' + token.token + '.\n' 
   //  };
   //  transporter.sendMail(mailOptions, function (err) {
   //  if (err) { return res.status(500).send({ msg: err.message }); }
   //    res.status(200).send('A password reset email has been sent to ' + user.email + '.');
   //  });


   return (
      <>
         <section className="contact__area">
            <div className="container-fluid p-0" style={{ background: `url(assets/img/bg/wave-bg-2.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }}>
               <div className="row g-0">
                  <div className="col-xl-12">
                     <div className="contact__map" >
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
                                    <a href="https://www.linkedin.com/company/onenine-ai/">
                                       <i ><FaLinkedin /></i>
                                       <i ><FaLinkedin /></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="https://twitter.com/Onenineai">
                                       <i ><FaTwitter /> </i>
                                       <i ><FaTwitter /> </i>
                                    </a>
                                 </li>
                              </ul>
                              </div>
                           </div>
                           <div className="contact__form">
                              <form  onSubmit={submitHandler}>
                                 <input type="text" name="name" value={formState.name || ''} placeholder="Your Name" onChange={changeHandler}/>
                                 <input type="email" name="email" value={formState.email || ''} placeholder="Your Email"onChange={changeHandler}/>
                                 <input type="submit" className="z-btn" value="Send Email"></input>
                                 {/* <textarea name="message" placeholder="Your Message"></textarea> */}
                                       {/* <button type="button" className="z-btn " >Send Message</button> */}
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

export default Contact;