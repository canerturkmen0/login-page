import React, { Component } from 'react';

import classes from './SignUp.css';
import SubmitButton from '../SubmitButton/SubmitButton';

class SignUp extends Component {
  fnameInputRef = React.createRef();
  lnameInputRef = React.createRef();
  emailInputRef = React.createRef();
  passwordInputRef = React.createRef();

  state = {
    fname: null,
    lname: null,
    email: null,
    password: null,
    passwordHidden: true
  }

  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitClickHandler = () => {

    if(this.fnameInputRef.current.value === '' || this.fnameInputRef.current.value === null){
       this.fnameInputRef.current.className = classes.error;
    } else {
      this.fnameInputRef.current.className = '';
    }

    if(this.lnameInputRef.current.value === '' || this.lnameInputRef.current.value === null){
       this.lnameInputRef.current.className = classes.error;
    } else {
      this.lnameInputRef.current.className = '';
    }

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
      <div className={classes.SignUp}>
        <h1>Sign Up for Free</h1>
        <div className={classes.FullName}>
          <input onChange={this.inputChangeHandler} ref={this.fnameInputRef} type="text" name="fname" placeholder="First Name*" required />
          <input onChange={this.inputChangeHandler} ref={this.lnameInputRef} type="text" name="lname" placeholder="Last Name*" required />
        </div>
        <input onChange={this.inputChangeHandler} ref={this.emailInputRef} type="email" name="email" placeholder="Email Address*" required />
        <div className={classes.Password}>
          <input onChange={this.inputChangeHandler} ref={this.passwordInputRef} type={this.state.passwordHidden ? "password" : "text"} name="password" placeholder="Set A Password*" required />
          <i onClick={this.passwordHideHandler} className="fas fa-key"></i>
        </div>
        <SubmitButton submitClickHandler={this.submitClickHandler} buttonText="Get Started" />
      </div>
    );
  }
}

export default SignUp;
