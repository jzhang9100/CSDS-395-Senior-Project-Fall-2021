import React from "react";
import '../styles/signup.css'

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          password1: '',
          password2: '',
          matching: '',
          username: ''
        };
        
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onMatchingPasswordChange = this.onMatchingPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password1: event.target.value });
  }
    
  onMatchingPasswordChange(event) {
      this.setState({ password2: event.target.value});
      if(event.target.value !== this.state.password1){
          this.setState({ matching: 'Passwords do not match' });
      } else {
          this.setState({ matching: '' });
      }
  }
    
    handleSubmit(event) { 
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password1
            })
        }).then((response) => {
            console.log(response);
        });
    }
    
    render() {

    return (
        <div className = 'signup-body'>
            <div className = 'Signup-Box'>
            <h1>Sign Up:</h1>
            <div className = 'Special-Box'>
                <input type="text" className = 'signup-button' id ='username' placeholder = 'Create Username' onChange={this.onUsernameChange}/>
                <input type="password" className = 'signup-button' id ='pw' placeholder = 'Enter Password' onChange={this.onPasswordChange}/>
                <input type="password" className = 'signup-button' id ='pw2' placeholder = 'Re-enter Password' onChange={this.onMatchingPasswordChange}/>
                <button id = 'button' onClick={this.handleSubmit}>Sign Up</button>
                <div id="matchingPasswords">{this.state.matching}</div>
            </div>
            </div>
        </div> 
    );
  }
}

export default Signup;
