import React from 'react';
import { Link } from 'react-router-dom';
import './CovidVaccine.css'

const CovidVaccine = () => {
    return (
        <div className="row justify-content-center ">
            <h3>COVID-19 Vaccine Information</h3>
            <div className="col-md-4 border rounded m-5 covidVaccine">
              <h4>Vaccination options for Mayo Clinic patients</h4>
              <p>COVID-19 vaccination options and guidelines vary widely by location and may change over time. See the latest information specific to Mayo Clinic campuses:</p>
              <a>Fazipur</a><br/>
              <a>Uttara</a><br/>
              <a>Savar</a><br/>
            </div>
            <div className="col-md-4 border rounded m-5 covidVaccine">
               <h4>Not a Registerd Patient?</h4>
                
                <p>If you're not a Medixx registered patient, check link below to get registerd and get the vaccine.</p><br/>
                <Link to='/signup'>
                    <p>Click here to register</p>
                </Link>
                </div>
                
            
            
        </div>
    );
};

export default CovidVaccine;