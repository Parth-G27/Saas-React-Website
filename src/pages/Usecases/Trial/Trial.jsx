import React from 'react';


const Trial = () => {

    return (
    <>
    {/* <div className={img === "assets/img/case/case-3.jpg" ? "col-xl-6 col-lg-6 col-md-6" : "col-xl-3 col-lg-3 col-md-6 grid-item"}>
            <div className="case__item mb-30 fix">
               <div className="case__thumb w-img p-relative">
                  <img src={img} alt="case" />
                  <div className="case__info p-absolute transition-3">
                     <h4>{title}</h4>
                     <span>{subtitle}</span>
                  </div>
                  <div className="case__info case__info-2 p-absolute transition-3">
                     <h4>{title}</h4>
                     <span>{subtitle}</span>
                  </div>
               </div>
            </div>
         </div> */}

        
            <div className="case__item mb-30 fix">
               <div className="case__thumb w-img p-relative">
                  <img src="assets/img/case/case-3.jpg" alt="case" />
                  <div className="case__info p-absolute transition-3">
                     <h4>Title</h4>
                     <span>subtitle</span>
                  </div>
                  <div className="case__info case__info-2 p-absolute transition-3">
                     <h4>Title</h4>
                     <span>subtitle</span>
                  </div>
               </div>
            </div>
        


    </>
    )
}
export default Trial;