import React from 'react';
import { Link } from 'react-router-dom';

const SinglePrice2 = ({title,price,active,one,two,three,four,five,six,seven}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-4 col-md-6">
            <div className={`price__item ${active && active} p-relative transition-3 text-center fix mb-30`}>
               <div className="price__shape transition-3 p-absolute">
                  <img src="assets/img/icon/price/triangle.png" alt=""/>
               </div>
               <div className="price__inner p-relative">
                  <p>{title}</p>
                  <div className="price__tag mb-45">
                     <h1>{`$${price}`}</h1>
                     <span>Per month</span>
                  </div>
                  <div className="price__features text-start mb-55">
                     <ul>
                        <li className='footer'><span>{one}</span></li>
                        <li className='footer'><span>{two}</span></li>
                        <li className='footer'><span>{three}</span></li>
                        <li className='footer'><span>{four}</span></li>
                        <li className='footer'><span>{five}</span></li>
                        <li className='footer'><span>{six}</span></li>
                        <li className='footer'><span>{seven}</span></li>
                     </ul>
                  </div>
                  <a href='https://checkout.stripe.com/c/pay/cs_live_b1iRqPzho5LmwmVRAQ9Uh5aDdvHsVIBt1X69yfBJ7kRsiuNq5zVhYEec4A#fidkdWxOYHwnPyd1blppbHNgWjA0SXBjdTROSENOa2hATUJ%2FUDdVc3FNRzE9bExQc0JKQFdAUExLb3QzTmBJXzBWaDV3RkRgUjJPc0ZgSklgTXJAf0JcXzZGQXUyMDBBMFVWcVBsTmh2XVxGNTU9Vm9xdmB0Zyd4JSUl' className="price-btn">Get Started</a>
               </div>
            </div>
         </div>
      </>
   );
};

export default SinglePrice2;