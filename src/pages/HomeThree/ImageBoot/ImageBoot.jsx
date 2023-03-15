import React from 'react';
import ImageSlider from './ImageSlider';

const ImageBoot = () => {

    const slides = [
        {url:'assets/img/actual/Collaboration.gif',title:'Collaborate easily with other users on the dashboard'},
        {url:'assets/img/actual/ConfigureAlgos.gif',title:'Configure a large number of algorithms to the specific use case needs'},
        {url:'assets/img/actual/DeepLearningResults.gif',title:'Easy to interpret visual results'},

        {url:'assets/img/actual/DetailedResults.gif',title:'Detailed Insights into the results and forecasts'},
        {url:'assets/img/actual/Learning.gif',title:'A comprehensive learning library to onboard both technical and non-technical users'},
        {url:'assets/img/actual/NLP.gif',title:'Build Natural Language Processing models with just a few clicks'},

        {url:'assets/img/actual/Overview.gif',title:'A user-friendly and highly intuitive platform'},
        {url:'assets/img/actual/Results.gif',title:'Get your model outputs in your desired format '},
        {url:'assets/img/actual/Uploaddataandselectalgos.gif',title:'No-code, ened to end wizard based model development'},

        {url:'assets/img/actual/SmartModels.gif',title:'Build smart models that provide and let you choose from a list of appropriate algorithms and their accuracy for the dataset'},
        {url:'assets/img/actual/SuggestionsandResults.gif',title:'Get meaningful suggestions alongside your results to help improve your modeling skills'},
        {url:'assets/img/actual/Tranformers.gif',title:'Various easy to use transformers available to clean and transform the data as needed'},
        
        {url:'assets/img/actual/Visualizations.gif',title:'Build stunning visualization with just a few easy to follow wizard choices without any previous BI experience'},
        
        // {url:'assets/img/Slide_img_test/c.gif',title:'3rd image'},
        // {url:'assets/img/Slide_img_test/d.gif',title:'4th image'},
        
    ];

    const containerStyle = {
        width: '920px',
        height : '490px',
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
                        <h1 className='imgslider'>See OneNine Platform In Action</h1>
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