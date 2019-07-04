import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import '../App.css';

const PrivateRoute = ({component: Component,...rest})=> {
    return (
      <Route
         {...rest} 
         render ={props => 
          localStorage.getItem('token') ? (
              <Component  {...props} />
          ) : (
              <Redirect to='/api/auth/register' />
     ) }
          />
     
    )
  }
  
  export default PrivateRoute;
  

