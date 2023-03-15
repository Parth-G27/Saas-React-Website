import React from 'react';
import { useState } from 'react';
const ImageSlider = ({slides}) => {
    const [currentIndex,setCurrentIndex]= useState(0);

    const sliderstyle = {
        height: "100%",
        position: "relative"  
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius:'10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage:`url(${slides[currentIndex].url })`,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',

    };

    const leftArrowStyles = {
        position:"absolute",
        top:"50%",
        transform:'translate(0, -50%)',
        left: "-100px",
        fontSize : "110px",
        color: 'Black',
        zIndex: 10,
        cursor: 'pointer'
    };

    const rightArrowStyles = {
        position:"absolute",
        top:"50%",
        transform:"translate(0, -50%)",
        right: "-100px",
        fontSize : "110px",
        color: 'Black',
        zIndex: 10,
        cursor: 'pointer'
    };

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        padding:'15px',
    };

    const dotStyles = {
        margin: '5px',
        cursor:'pointer',
        fontSize: '30px',
        
    };

    const textContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        
        
    };

    const textStyle = {
        margin: '5px',
        cursor:'pointer',
        fontSize: '27px',
        padding:'3px',
        color: 'black',
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom:'10px'
    };


    const goToPrevious = () => {
        const isFirstSlide  = currentIndex  === 0 ; 
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLasttSlide  = currentIndex  === slides.length -1 ; 
        const newIndex = isLasttSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex);
    }


    return(
        <>
        <div style={sliderstyle}>

            <div style={textContainerStyle}> 
                    <div style={textStyle}>{slides[currentIndex].title}</div>                
            </div>

            <div style={leftArrowStyles} onClick={goToPrevious}>&#8249;</div>
            <div style={rightArrowStyles} onClick={goToNext}>&#8250;</div>
            <div style={slideStyles} > </div>

            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex)=>(
                    <div key={slideIndex} style={dotStyles} onClick={()=> goToSlide(slideIndex) }>&#x2022;</div>
                ))}
            </div>

               
        </div>
        
        </>
    )
}
export default ImageSlider;
