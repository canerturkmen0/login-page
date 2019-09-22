import React, { Component } from 'react';

import classes from './LogIn.css';
import SubmitButton from '../SubmitButton/SubmitButton';

class LogIn extends Component {
  emailInputRef = React.createRef();
  passwordInputRef = React.createRef();

  state = {
    email: null,
    password: null,
    passwordHidden: true
  }

  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitClickHandler = () => {
      if(this.emailInputRef.current.value === '' || this.emailInputRef.current.value === null){
         this.emailInputRef.current.className = classes.error;
      } else {
        this.emailInputRef.current.className = '';
      }

      if(this.passwordInputRef.current.value === '' || this.passwordInputRef.current.value === null){
        this.passwordInputRef.current.className = classes.error;
      } else {
        this.passwordInputRef.current.className = '';
      }
  }

  passwordHideHandler = () => {
    this.setState({ passwordHidden: !this.state.passwordHidden });
  }

  render(){
    return(
      <div className={classes.LogIn}>
        <h1>Welcome Back!</h1>
        <input onChange={this.inputChangeHandler} ref={this.emailInputRef} type="email" name="email" placeholder="Email Address*" required/>
        <div className={classes.Password}>
          <input onChange={this.inputChangeHandler} ref={this.passwordInputRef} type={this.state.passwordHidden ? "password" : "text"} name="password" placeholder="Password*" required/>
          <i onClick={this.passwordHideHandler} className="fas fa-key"></i>
        </div>
        <small>Forgot Password?</small>
        <SubmitButton submitClickHandler={this.submitClickHandler} buttonText="Log In" />
      </div>
    );
  }
}

export default LogIn;
