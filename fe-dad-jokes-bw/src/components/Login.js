import React from "react";
import axios from 'axios';

// const PrivateRoute =  App => Login => {
//     return class extends Component {
//       constructor(props) {
//         super(props);
//         this.state = {
//           loggedIn: false,
//         };
//       }

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        password:'',
        email:''
       };   
    }

    loginUser = (event) => {
        event.preventDefault()
        
        axios
          .post('http://localhost:5000/api/auth/login', this.state)
          .then(res => {
            localStorage.setItem('token', res.data.token); //the console.log will show the users id.
          })                                               //we don't want that
          .catch(err => console.log(err));
      };

      handleInputChange = event => {
          this.setState({ [event.target.name]: event.target.value});
      };



    render() { 
        console.log(this.state.firstName, this.state.lastName, this.state.email, this.state.password)
        return ( 
            <div className="loginUser">
                <form onSubmit={this.loginUser}>
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
                    <button type='submit'>Login</button>
                    </form>
            </div>
         );
    }
}
 
export default Login;