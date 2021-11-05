import React from 'react';
import { Card } from 'react-bootstrap';
import './Medicine.css'

const Medicine = (props) => {
    const{name,price, company,image}=props.medicine
    return (
        <div className="col-md-3 medicine justify-content-center">
              <Card style={{ width: '18rem'}} className="fullcard" >
                <Card.Img className="card-img" variant="top" src={image} />
                <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span id="description">
                    <small>{company}</small></span><br/>
                    <p>${price}</p>
                    
                    </Card.Text>  
                </Card.Body>
                
                </Card>
            </div>
           
    );
};

export default Medicine;