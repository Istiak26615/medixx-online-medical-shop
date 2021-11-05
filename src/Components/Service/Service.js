import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{id,name, description,image}=props.service
    return (
        
        <div className="col-md-3 service justify-content-center">
             <Link to={`/details/${id}`} className="detailsLink">
              <Card style={{ width: '18rem'}} className="fullcard" >
                <Card.Img className="card-img" variant="top" src={image} />
                <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span id="description">
                    <small>{description}</small></span><br/>
                    
                    </Card.Text>  
                </Card.Body>
                
                </Card>
                </Link>
            </div>
           
            
         
    );
};

export default Service;