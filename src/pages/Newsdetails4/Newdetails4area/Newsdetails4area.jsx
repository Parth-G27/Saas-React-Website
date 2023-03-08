import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';
// import BlogLeftSideBar from '../../Blogs/BlogsArea/BlogLeftSideBar';
import { BiReply } from 'react-icons/bi';
// import Newsdetailssidebar from '../News/Newsdetailssidebar/Newsdetailssidebar';
import Newsbar from '../../News/Newsbar/Newsbar';

const Newsdetails4area = () => {
   return (
      <>
         <section className="blog__area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 col-lg-8">
                     <div className="blog__details-wrapper mr-50">
                        {/* <div className="blog__text mb-45">
                           <p>Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it's your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry give us a bell, don't get shirty with me daft codswallop geeza up the duff zonked I tinkety tonk old fruit bog-standard spiffing good time Richard. Are you taking the piss young delinquent wellies absolutely bladdered the BBC Eaton my good sir, cup of tea spiffing bleeder David mufty you mug <span>cor blimey guvnor, burke bog-standard brown</span> bread wind up barney. Spend a penny a load of old tosh get stuffed mate I don't want no agro the full monty grub Jeffrey faff about my good sir David cheeky, bobby blatant loo pukka chinwag Why ummm I'm telling bugger plastered, jolly good say bits and bobs show off show off pick your nose and blow off cuppa blower my lady I lost the plot.</p>
                        </div> */}
                        {/* <div className="blog__quote mb-40 p-relative white-bg fix">
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
                              <p>Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate don't get shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load of old tosh blag horse.</p>
                           </blockquote>
                           <h4>Shahnewaz Sakil</h4>
                        </div> */}
                        {/* <div className="blog__text mb-40">
                           <p>Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don't get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p>
                        </div> */}

                        {/* <div className="blog__details-thumb w-img mb-45">
                           <img src="assets/img/blog/details/b-d-1.jpg" alt="" />
                        </div> */}
                        <div className="blog__details-thumb w-img mb-45">
                           <img src="assets/img/blog/details/5.jpg" alt="" />
                        </div>

                        <div className="blog__text mb-40">
                           <h1 className='pb-5 pt-40'>Future State of AI</h1>
                           <p className='wee'>August 15, 2021 | Ravi Trivedi</p>
                           <p className='pb-0'>As Artificial intelligence becomes mainstream, organizations are looking for faster ways to develop & integrate it within their key products. You have probably heard that developing AI requires lots of data observations, so a machine can learn for it. I think AI is not just dependent on data observations but is combination of data, algorithms & approaches.</p>
                           
                           <p className='sub'>Data, Algorithms & Approaches</p>
                           <p className='pb-0'>Recent developments in data platforms makes it easy to ingest and use data from internal, external, structured and unstructured data sources. Many data providers are enabling quick access to curated data from various domains - i.e web scraping, open government datasets & NLP techniques.</p>
                           <p className='pb-0'>Machine Learning & AI Algorithms are also implemented in thousands of open source libraries. Python libraries play an important role in developing machine learning, data science, data visualization, image and data manipulation applications. In fact, there are over 137,000 python libraries present today causing confusion between different implementation of same algorithm, for eg - Regression.</p>
                           <p className='pb-15'>Now that we have automated data & algorithms, let's talk about approaches. Approaches of developing AI model also differ based on the problem at hand. Let's take an example of imputing missing data. A researcher may choose any method from the limited methods currently available like replace missing data values with 0, NULL, calculated values such as mean, median, mode or any other value of choice. Each of the method will lead to a different output.</p>
                           <p className='sub'>Can AutoML help with faster development?</p>
                           <p className='pb-0'>Automated machine learning, or AutoML reduces friction by allowing users to build machine learning and deep learning models automatically. It also allows users to quickly test viability of a dataset for given problem at hand, rather then spending few months to figure out that the data or approach is not good. If you provide labeled training data as input it will produce an optimized model as output.</p>
                           <p className='pb-15'>It does not aim to replace data scientists or any research method but instead it helps in fast tracking AI development & automation. It increases productivity by automating repetitive tasks - from cleaning the data, engineering features, optimizing, explaining, and deploying AI into production.</p>

                           <h2>Future State: Introducing No Code AI</h2>
                           <p className='pb-0'>Yes it is just the beginning of next leap in AI. Alongside data and algorithms, our approach towards developing AI can also be automated. Currently AI is only accessible to those limited users who know how to code. No Code AI is here to democratic AI to everyone, all you need is your data.</p>
                           <p className='pb-10'>OneNine AI is a technology startup building no code AI solutions with a goal to bring AI to everyone and accelerate organization’s AI journey. Our platform automates end to end AI process allowing users to focus less on technology & more on solving complex business problems by building revenue generating AI models quickly.</p>
                           <p className='sub'>Introducing OneNine Cloud</p>
                           <p className='pb-0'>It is our No Code AI platform on Cloud. It reduces entry barriers for individuals and businesses to start using AI and machine learning. It's goal is to bring AI to everyone and accelerate digital transformation. You can use <span>discovery wizard</span> to build next AI model used within your product. It aims towards reducing complexity by allowing non technical users to go from an idea to AI model in minutes. <span>One click data analysis</span> allows users to get insights from data attributes without any worry of writing code. <span>Pick & Choose from the marketplace of most popular machine learning models</span> in the world. It helps you learn AI concepts and develop models at the same time. We are always adding new models on OneNine platform from the experts in the AI field. Our proprietary process will help you build AI models and recommend the best solution based on your data. </p>
                           
                           {/* <p> <span>Cheeky bugger cracking goal starkers lemon squeezy</span> lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don't get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p> */}
                        </div>

                       

                           {/* <p className='wee'>December 14, 2021 | Ravi Trivedi</p>
                           <p>We are very excited to launch OneNine AI Academy, introducing an innovative way of learning AI.  Innovative Learning approach focuses on solving real world challenges and reducing entry barriers for students & individuals to start using AI and Machine Learning. We have partnered with leading research institutions around that world to bring our state-of-the-art platform to classroom and academic research.</p> */}
                           {/* <p> <span>Cheeky bugger cracking goal starkers lemon squeezy</span> lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don't get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p> */}
                       
                        <div className="blog__details-thumb w-img mb-35">
                           <img src="assets/img/blog/details/6.jpg" alt="" />
                        </div>

                        <div className="blog__text mb-40">
                           <p className='sub'>Concluding thoughts</p>
                           <p className='pb-0'>Ddevelopment process can be cheaper, faster & fully automated in future. Currently it takes 3-4 months to develop majority of AI models & 5-6 months to fully integrate and make it usable. Future of AI will be <span>faster development, quicker automation and no code</span>.</p>
                        </div>
                        {/* <div className="blog__tag mb-30">
                           <span>Tag : </span>
                           <a href="#">Blog</a>
                           <a href="#">Creative</a>
                           <a href="#">Portfolio</a>
                           <a href="#">Theme</a>
                        </div> */}

                        <div className="blog__share d-flex align-items-center mb-30">
                           <span>Share : </span>
                           <div className="blog__social theme-social d-inline-block">
                              <ul>
                                 <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                       <i ><FaLinkedin /></i>
                                       <i ><FaLinkedin /></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="https://twitter.com/" target="_blank">
                                       <i ><FaTwitter /> </i>
                                       <i ><FaTwitter /> </i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                       <i ><FaFacebookF /> </i>
                                       <i ><FaFacebookF /> </i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>

                        {/* <div className="blog__author mb-95 d-sm-flex">
                           <div className="blog__author-img mr-30">
                              <img src="assets/img/blog/author/author-1.jpg" alt="" />
                           </div>
                           <div className="blog__author-content">
                              <h5>Sophie Ianiro</h5>
                              <span>Author</span>
                              <p>I said cracking goal down the pub blag cheeky bugger at public school A bit of how's your father boot.!</p>
                           </div>
                        </div> */}
                        {/* <div className="post-comments mb-95" data-wow-delay=".6s">
                           <div className="post-comment-title mb-40">
                              <h3>3 Comments</h3>
                           </div>
                           <div className="latest-comments">
                              <ul>
                                 <li>
                                    <div className="comments-box">
                                       <div className="comments-avatar">
                                          <img src="assets/img/blog/comment/comments-1.png" alt="" />
                                       </div>
                                       <div className="comments-text">
                                          <div className="avatar-name">
                                             <h5>David Angel Makel</h5>
                                             <span className="post-meta">December 26, 2021</span>
                                          </div>
                                          <p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nut argy bargy vagabond buggered dropped.</p>
                                          <a href="#" className="comment-reply"> <i > <BiReply /> </i> Reply</a>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="children">
                                    <div className="comments-box">
                                       <div className="comments-avatar">
                                          <img src="assets/img/blog/comment/comments-rep-1.png" alt="" />
                                       </div>
                                       <div className="comments-text">
                                          <div className="avatar-name">
                                             <h5>Bailey Wonger</h5>
                                             <span className="post-meta">December 27, 2021</span>
                                          </div>
                                          <p>Do one say wind up buggered bobby bite your arm off gutted mate, David victoria sponge cup of char chap fanny around.</p>
                                          <a href="#" className="comment-reply"> <i > <BiReply /> </i> Reply</a>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="children">
                                    <div className="comments-box">
                                       <div className="comments-avatar">
                                          <img src="assets/img/blog/comment/comments-rep-2.png" alt="" />
                                       </div>
                                       <div className="comments-text">
                                          <div className="avatar-name">
                                             <h5>Hilary Ouse</h5>
                                             <span className="post-meta">December 28, 2021</span>
                                          </div>
                                          <p>Baking cakes is cobblers wellies William geeza bits and bobs what a plonker it's your round,</p>
                                          <a href="#" className="comment-reply"> <i > <BiReply /> </i> Reply</a>
                                       </div>
                                    </div>
                                 </li>
                              </ul>
                           </div> 
                        </div>*/}

                        {/* <div className="post-comment-form">
                           <h4>Leave a Reply </h4>
                           <span>Your email address will not be published.</span>
                           <form action="#">
                              <div className="row">
                                 <div className="col-xl-12">
                                    <div className="post-input">
                                       <textarea placeholder="Your message..."></textarea>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-md-6">
                                    <div className="post-input">
                                       <input type="text" placeholder="Your Name" />
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-md-6">
                                    <div className="post-input">
                                       <input type="email" placeholder="Your Email" />
                                    </div>
                                 </div>
                                 <div className="col-xl-12">
                                    <div className="post-input">
                                       <input type="text" placeholder="Website" />
                                    </div>
                                 </div>
                                 <div className="col-xl-12">
                                    <div className="post-check mb-40">
                                       <input type="checkbox" />
                                       <span>Save my name, email, and website in this browser for the next time I comment.</span>
                                    </div>
                                 </div>
                              </div>

                              <button type="button" className="z-btn">Send Message</button>
                           </form>
                        </div> */}
                     </div>
                  </div>

                  <Newsbar/>
               </div>
            </div>
         </section>
      </>
   );
};

export default Newsdetails4area;