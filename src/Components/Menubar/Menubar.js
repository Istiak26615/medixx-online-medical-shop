import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

import './Menubar.css'

const Menubar = (props) => {
  const {user, logout}=useAuth();

    return (
        <div className="MenuBar-container menubar mt-2 bg-dark d-flex align-items-center">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-2">
            
              <div className="logo-img">
              <Link to="/" className=" d-flex align-items-center items">
                <img className="w-50" src="https://www.zilliondesigns.com/images/portfolio/healthcare-hospital/iStock-471629610-Converted.png" alt="" />
                <h1 className="logoname">Medixx</h1>
                </Link>
                
              </div>
              
            </div>
            <div className="col-md-10">
              <div className="menu-container">

                <ul className="d-flex align-items-center justify-content-end ">
                  
                  <Link to="/" className="items">
                    <li>Home</li>
                  </Link>
                  <Link to="/medicine" className="items">
                    <li>Medicine</li>
                  </Link>
                  <Link to="/doctor" className="items">
                    <li>Doctors</li>
                  </Link>
                  {!user.email?
                  <Link to="/login" className="items">
                  <li>Login</li></Link>:
                  <Link to="/login" className="items d-flex align-items-center">
                  <li onClick={logout}>Logout</li>
                  
                  </Link>
                  }
                  {user.email?<small className="user-name">Signed in as {user.displayName}</small>:<p></p>}
                  
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Menubar;