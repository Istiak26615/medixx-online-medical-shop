import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors]=useState([])
    useEffect(()=>{
        fetch('./doctorData.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div className=" container">
                  
        <div className="row justify-content-center"> 
        <h3>Doctors</h3>      
            {
                doctors.map(doctor=><Doctor key={doctor.name} doctor={doctor}></Doctor>)
            }
        </div>
        </div>
    );
};

export default Doctors;