import React from 'react';
import ImageSlider from './ImageSlider';

const ImageBoot = () => {

    const slides = [
        {url:'assets/img/aiacademy/1.png'},
        {url:'assets/img/aiacademy/2.png'},
        {url:'assets/img/aiacademy/3.png'},
        {url:'assets/img/aiacademy/4.png'},
        {url:'assets/img/aiacademy/5.png'},
        {url:'assets/img/aiacademy/6.png'},
        {url:'assets/img/aiacademy/7.png'},
        {url:'assets/img/aiacademy/8.png'},
        {url:'assets/img/aiacademy/9.png'},
        {url:'assets/img/aiacademy/10.png'},
        {url:'assets/img/aiacademy/11.png'},
        {url:'assets/img/aiacademy/12.png'},
        {url:'assets/img/aiacademy/13.png'},
        {url:'assets/img/aiacademy/14.png'},
        {url:'assets/img/aiacademy/15.png'},
        {url:'assets/img/aiacademy/16.png'},
        {url:'assets/img/aiacademy/17.png'},
        {url:'assets/img/aiacademy/18.png'},
        {url:'assets/img/aiacademy/19.png'},
        {url:'assets/img/aiacademy/20.png'},
        {url:'assets/img/aiacademy/21.png'},
        {url:'assets/img/aiacademy/22.png'},
        {url:'assets/img/aiacademy/23.png'},
        {url:'assets/img/aiacademy/24.png'},
        {url:'assets/img/aiacademy/25.png'},
        {url:'assets/img/aiacademy/26.png'},
       
        
    ];

    const containerStyle = {
        width: '1080px',
        height: '607.5px',
        margin : '0 auto',
        padding:'30px',
    };

    return (
        <>
        <section className="services__area pt-100 pb-190" style={{ background: `url(assets/img/bg/bg-new.png)`, backgroundPosition: 'top', backgroundSize: 'cover' }} >
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mb-70 wow fadeInUp" data-wow-delay=".2s">
                        <h1 className='imgslider'>Preview Course Content</h1>
                     </div>
                  </div>
               </div>
               <div className="row">
                
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