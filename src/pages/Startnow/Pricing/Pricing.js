import React from 'react';
import SinglePrice from '../../../components/SinglePrice/SinglePrice';
import SinglePrice2 from '../../../components/SinglePrice/SinglePrice2';

const Pricing = () => {
   return (
      <>
         <section className="price__area pt-115 pb-75">
            <div className="container">
               <div className="row">

                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 mb-85 text-center">
                        <span>Our Prices</span>
                        <h2>Choose From The Following Plans</h2>
                        {/* <p>join and get 20% off coupon</p> */}
                     </div>
                     {/* <div className="price__tab d-flex justify-content-center mb-50">
                        <div className="price__offer">
                           <span>Save 20%</span>
                           <img src="assets/img/icon/price/line.png" alt=""/>
                        </div>
                        <ul className="nav nav-tabs justify-content-center" id="price-tab" role="tablist">

                            <li className="nav-item">
                              <button className="nav-link active" id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly" role="tab" aria-controls="yearly" aria-selected="true">Yearly</button>
                           </li>

                           <li className="nav-item">
                              <button className="nav-link" id="monthly-tab" data-bs-toggle="tab"
                                 data-bs-target="#monthly" role="tab" aria-controls="monthly"
                                 aria-selected="false">Monthly</button>
                           </li>

                        </ul>
                     </div> */}
                  </div>
               </div>

               <div className="price__tab-content">
                  <div className="tab-content" id="price-tab-content">
                     {/* <div className="tab-pane fade" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                        <div className="row">

                           <SinglePrice title="Free" price="0" />
                           <SinglePrice title="Premium" price="47" active="active" />
                           <SinglePrice title="Enterprise" price="74" />

                        </div>
                     </div> */}

                     <div className="tab-pane fade show active" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                        <div className="row">

                           <SinglePrice title="OneNine AI Standard" price="70" one='One Click Data Analysis' two='200+ Data Visualizations & Charts' three='Open Source Data Search' four='Learn AI, ML and Deep Learning' five='Create & Host Dashboard' six='Up to 5GB Storage & Processing' seven='Up to 20 Projects' link='https://checkout.stripe.com/c/pay/cs_live_b1CZcoGoZkKU3FF4mxbxjFtOQ1C5KIWlZfqoztzH7PIteniE5MPMky0J5c#fidkdWxOYHwnPyd1blppbHNgWjA0SXBjdTROSENOa2hATUJ%2FUDdVc3FNRzE9bExQc0JKQFdAUExLb3QzTmBJXzBWaDV3RkRgUjJPc0ZgSklgTXJAf0JcXzZGQXUyMDBBMFVWcVBsTmh2XVxGNTU9Vm9xdmB0Zyd4JSUl'/>
                           <SinglePrice2 title="OneNine AI Pro" price="100" active="active" one='This includes:' two='All Standard Features' three='Predictive Modeling Building' four='Deep Learning Model Building' five='Pick & Choose AI Model' six='Up to 10GB Storage & Processing' seven='Up to 50 Projects' />
                           <SinglePrice title="OneNine AI Pro +" price="120" one='This includes:' two='All Pro Features' three='Predictive Modeling Hosting' four='Real Time APIs' five='Batch & Adhoc Predictions' six='Unlimited Storage & Processing' seven='Up to 200 Projects' link='https://checkout.stripe.com/c/pay/prctbl_1LzCKHKMFKnmEHGzfkaRjQrF/prctblitm_MidfzTwzS8VUR4#fidkdWxOYHwnPyd1blppbHNgWjA0SXBjdTROSENOa2hATUJ%2FUDdVc3FNRzE9bExQc0JKQFdAUExLb3QzTmBJXzBWaDV3RkRgUjJPc0ZgSklgTXJAf0JcXzZGQXUyMDBBMFVWcVBsTmh2XVxGNTU9Vm9xdmB0Zyd4JSUl'/>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default Pricing;