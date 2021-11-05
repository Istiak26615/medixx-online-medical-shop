import React from 'react';
import { useParams } from 'react-router';
import serviceData from '../../Data/serviceData';

const ServiceDetails = () => {
    let{id}=useParams();
    const  service=serviceData.find(s=>s.id===id)
    return (
        <div className="row justify-content-center">
            <h1>{service.name}</h1>
            <div className="col-md-6 p-5">
                <img src={service.image} alt="" />
            </div>
            <div className="col-md-4 p-5">
                  <p>{service.moreDescription}</p>
                  <small>{service.nameofDoctor}</small><br/>
                  <small>{service.Designation}</small>
            </div>
            
            
        </div>
    );
};

export default ServiceDetails;