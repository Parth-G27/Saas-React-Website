import React from 'react';
import ImageSlider from './ImageSlider';

const ImageBoot = () => {

    const slides = [
        {url:'assets/img/actual/png/1.png',title:'Apply a wide array of transformations to clean your data as required '},
        {url:'assets/img/actual/png/2.png',title:'Apply a wide array of transformations to clean your data as required'},
        {url:'assets/img/actual/png/3.png',title:'Browse all of the files used for models - input and output files'},
        {url:'assets/img/actual/png/4.png',title:'Build smart models that provide and let you choose from a list of appropriate algorithms and their accuracy for the dataset'},
        {url:'assets/img/actual/png/5.png',title:'Build stunning visualizations with just a few easy to follow wizard choices without any previous BI experience'},
        {url:'assets/img/actual/png/6.png',title:'Configure your ML algorithm with just a few clicks through the wizard'},
        {url:'assets/img/actual/png/7.png',title:'Easily learn and select from a large list of algorithms suited various types of ML models'},
        {url:'assets/img/actual/png/8.png',title:'Easily select your models and algorithms'},
        {url:'assets/img/actual/png/9.png',title:'Easily share your models and collaborate with other users on the platform'},
        {url:'assets/img/actual/png/10.png',title:'Exploratory Data Analysis (EDA) generated within seconds with just a few clicks'},
        {url:'assets/img/actual/png/11.png',title:'Get a bird`s eye view of your the platform activity and usage'},
        {url:'assets/img/actual/png/12.png',title:'Get a detailed, easy to read report of the model output'},
        {url:'assets/img/actual/png/13.png',title:'Get access to our comprehensive learning library designed for both technical and non-technical users'},
        {url:'assets/img/actual/png/14.png',title:'Get access to our learing library to quickly learn or review concepts'},
        {url:'assets/img/actual/png/15.png',title:'Get easy to read descriptive stats on your data'},
        {url:'assets/img/actual/png/16.png',title:'Get explainations for the model results - all on the platform'},
        {url:'assets/img/actual/png/17.png',title:'Get results and their explainations - all on one page'},
        {url:'assets/img/actual/png/18.png',title:'Get suggestions based on your data, model, and parameter selections'},
        {url:'assets/img/actual/png/19.png',title:'Keep track of all your previous models - all in one place'},
        {url:'assets/img/actual/png/20.png',title:'Our detailed documentation provides useful information on ML as well as Platform features'},
        {url:'assets/img/actual/png/21.png',title:'Quickly select model parameters with clicks in our wizard based platform'},
        {url:'assets/img/actual/png/22.png',title:'Run models in real time using APIs - one click API creation within seconds'},
        {url:'assets/img/actual/png/23.png',title:'Upload data from a large number of data sources'},
        {url:'assets/img/actual/png/24.png',title:'User friendly, easy to use platform'},
        {url:'assets/img/actual/png/25.png',title:'View you model results and easily submit for review and approval to team expert as needed'},
        {url:'assets/img/actual/png/26.png',title:'Visually stunning and informative model outputs '},
        {url:'assets/img/actual/png/27.png',title:'Visually stunning and informative model outputs'},
        {url:'assets/img/actual/png/28.png',title:'Enable complete AI Lifecycle - No Code'}

        // {url:'assets/img/actual/Collaboration.gif',title:'Collaborate easily with other users on the dashboard'},
        // {url:'assets/img/actual/ConfigureAlgos.gif',title:'Configure a large number of algorithms to the specific use case needs'},
        // {url:'assets/img/actual/DeepLearningResults.gif',title:'Easy to interpret visual results'},
        // {url:'assets/img/actual/DetailedResults.gif',title:'Detailed Insights into the results and forecasts'},
        // {url:'assets/img/actual/Learning.gif',title:'A comprehensive learning library to onboard both technical and non-technical users'},
        // {url:'assets/img/actual/NLP.gif',title:'Build Natural Language Processing models with just a few clicks'},
        // {url:'assets/img/actual/Overview.gif',title:'A user-friendly and highly intuitive platform'},
        // {url:'assets/img/actual/Results.gif',title:'Get your model outputs in your desired format '},
        // {url:'assets/img/actual/Uploaddataandselectalgos.gif',title:'No-code, ened to end wizard based model development'},
        // {url:'assets/img/actual/SmartModels.gif',title:'Build smart models that provide and let you choose from a list of appropriate algorithms and their accuracy for the dataset'},
        // {url:'assets/img/actual/SuggestionsandResults.gif',title:'Get meaningful suggestions alongside your results to help improve your modeling skills'},
        // {url:'assets/img/actual/Tranformers.gif',title:'Various easy to use transformers available to clean and transform the data as needed'},
        // {url:'assets/img/actual/Visualizations.gif',title:'Build stunning visualization with just a few easy to follow wizard choices without any previous BI experience'},
        // {url:'assets/img/Slide_img_test/c.gif',title:'3rd image'},
        // {url:'assets/img/Slide_img_test/d.gif',title:'4th image'},
        
    ];

    const containerStyle = {
        width: '1500px',
        height: '650px',
        // maxHeight : '950px',
        
        // maxWidth : '1600px',
        // maxHeight : '1000px',
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
                        {/* <h1 className='imgslider'>See OneNine Platform In Action</h1> */}
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