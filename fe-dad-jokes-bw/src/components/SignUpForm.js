import React from "react";
import axios from 'axios';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            password:'',
            email:''
         }


    }

    registerUser = (event) => {
        event.preventDefault()
        
        axios
          .post('http://localhost:5000/api/auth/register', this.state)
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err));
      };

      handleInputChange = event => {
          this.setState({ [event.target.name]: event.target.value});
      };



    render() { 
        console.log(this.state.firstName, this.state.lastName, this.state.email, this.state.password)
        return ( 
            <div className="registerForm">
                <form onSubmit={this.registerUser}>
                    <input 
                    placeholder='First Name'
                    name='firstName'
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    />

                    <input 
                    placeholder='Last Name'
                    name='lastName'
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    />

                    <input 
                    placeholder='Email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    />  

                    <input 
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
         );
    }
}
 
export default SignUpForm;







