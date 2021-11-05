import React from 'react';
import './WhyMedixx.css'

const WhyMedixx = () => {
    return (
        <div className="row justify-content-center ">
            <h3> Why choose Medixx?</h3>
            <div className="col-md-3 border rounded m-3 whyMedixx">
               <h4>More experience</h4>
               <p>Every year, more than a million people come to Mayo Clinic for care. Our highly specialized experts are deeply experienced in treating rare and complex conditions.</p>
            </div>
            <div className="col-md-3 border rounded m-3 whyMedixx">
            <h4>The right answers</h4>
               <p>Successful treatment starts with an accurate diagnosis, and our experts take the time to get it right. A team of specialists will listen to your needs and evaluate your condition from every angle to make the very best plan for you.</p>
            </div>
            <div className="col-md-3 border rounded m-3 whyMedixx">
            <h4>Seamless care</h4>
               <p>At Medixx, every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here.</p>
            </div>
            <div className="col-md-3 border rounded m-3 whyMedixx">
            <h4>Unparalleled expertise</h4>
               <p>Medixx experts are some of the best in the world. In the BD News, World Report rankings of top hospitals, Medixx is consistently ranked among the top hospitals in the nation.</p>
            </div>
            
        </div>
    );
};

export default WhyMedixx;