import React from 'react';
import ImageSlider from './ImageSlider';

const ImageBoot = () => {

    const slides = [
        {url:'assets/img/Slide_img_test/a.gif',title:'1st image'},
        {url:'assets/img/Slide_img_test/b.gif',title:'2md image'},
        {url:'assets/img/Slide_img_test/c.gif',title:'3rd image'},
        {url:'assets/img/Slide_img_test/d.gif',title:'4th image'},
    ];

    const containerStyle = {
        width: '850px',
        height : '450px',
        margin : '0 auto',
    };

    return (
        <>
        <section className="services__area pt-155 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-70 wow fadeInUp" data-wow-delay=".2s">
                        <h1>Our Dashboard In Action</h1>
                     </div>
                  </div>
               </div>
               <div className="row">
                {/* <h4>Hello Sir, am Parth</h4> */}
                <div style={containerStyle}>
                    <ImageSlider slides={slides} />
                </div>

               </div>
            </div>
         </section>
        
        </>
    )
}

export default ImageBoot;