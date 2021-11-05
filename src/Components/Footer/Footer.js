import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="row bg-dark footer p-5">
            <div className="col-md-6">
            <p>About</p><br/>
            <p>Read blog</p><br/>
            <p>Signup to get notice</p><br/>
            <p>Emergency </p><br/>
            </div>
            <div className="col-md-6">
            <h2 className="footer">Have any Question?</h2>
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <br/>
                  <input
                    className="footer-input mt-2"
                    type="text"
                    placeholder="Enter Question"
                  /><br/>
                  <button type="button" className="btn btn-light m-5">Submit</button>
            </div>
        </div>
    );
};

export default Footer;