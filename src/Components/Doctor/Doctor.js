import React from 'react';
import { Card } from 'react-bootstrap';
import './Doctor.css'

const Doctor = (props) => {
    const{name,speciality, address,phone,image}=props.doctor
    return (
        <div className="col-md-3 doctor justify-content-center">
              <Card style={{ width: '18rem'}} className="fullcard" >
                <Card.Img className="card-img" variant="top" src={image} />
                <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span id="description">
                    <small>{speciality}</small></span><br/>
                    <p>{address}</p>
                    <p>{phone}</p>
                    
                    </Card.Text>  
                </Card.Body>
                
                </Card>
            </div>
    );
};

export default Doctor;