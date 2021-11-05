import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const[services, setServices]=useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className=" container">
                  
        <div className="row justify-content-center"> 
        <h3>Our Services</h3>      
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }
        </div>
        </div>
    );
};

export default Services;