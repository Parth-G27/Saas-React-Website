import React from 'react';
import TextAnimation from 'react-text-animations'


const New = () => {
    return (
       <>
       <div className="section__title section__title-an " >
       <TextAnimation.Scale
                      className=""
                      animation={{
                        duration: 1500,
                        delay: 4000,
                        timingFunction: 'ease-in-out',
                      }}
                      target="Science"
                      text={['Analytics', 'Visualization', 'Science']}
                    >
                      Data Science
        </TextAnimation.Scale>
       </div>
        
      
       
         
          
     </>
    );
 };
 
 export default New;