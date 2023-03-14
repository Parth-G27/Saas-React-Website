import React,{useState} from 'react';
import SliderData from '../SliderData/SliderData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';
// import '..';

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1 )
    }

    console.log(current)
    const prevSlide = () =>{
        
    }

    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    };

    return (
        <>
        {/* <section className="services__area pt-115 pb-10">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section__title section__title-3 text-center mt-100 mb-10 wow fadeInUp" data-wow-delay=".2s">
                        <div className='pb-40'>
                            <h2>Our Latest Updates</h2>
                        </div>
                        <h4 className='news'>Learn more about our platform & partnerships with organizations and academic institutions around the world to bring latest innovation for everyone</h4>
                     </div>
                  </div>
               </div>
               <section className='slider001'>
                <FaArrowAltCircleLeft className='left-arrow001'  />
                <FaArrowAltCircleRight className='right-arrow001' />
                {SliderData.map( (slide, index) => {
                    return (
                    <img src={slide.image} alt="test" className='img001'></img>
                    )
                })}
                </section>
            </div>
         </section> */}

        <section className="services__area pt-115 pb-10">
        
        <div className="container">
        <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
        <div className='slider001'>
            <FaArrowAltCircleLeft className='left-arrow001'  onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow001' onClick={nextSlide}/>
            {SliderData.map( (slide, index) => {
                return (
                <img src={slide.image} alt="test" className='img001'></img>
                )
            })}

        </div>
        </div>
        </div>
        </section>
        
        </>
    )
};

export default ImageSlider;