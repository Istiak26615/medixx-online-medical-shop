import React, { useEffect, useState } from 'react';
import Medicine from '../Medicine/Medicine';

const Medicines = () => {
    const [medicines, setMedicines]=useState([])
    useEffect(()=>{
        fetch('./medicines.json')
        .then(res=>res.json())
        .then(data=>setMedicines(data))
    },[])
    return (
        <div className=" container">
                  
        <div className="row justify-content-center"> 
        <h3>Medicines list</h3>      
            {
                medicines.map(medicine=><Medicine key={medicine.name} medicine={medicine}></Medicine>)
            }
        </div>
        </div>
    );
};

export default Medicines;