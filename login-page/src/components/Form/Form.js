import React, { Component } from "react";

import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
import classes from "./Form.css";

class Form extends Component {
  state = {
    signUpActive: true
  };

  logInClickHandler = () => {
    this.setState({ signUpActive: false });
  };

  signUpClickHandler = () => {
    this.setState({ signUpActive: true });
  };

  render() {
    const signUpActive = this.state.signUpActive;

    return (
      <div className={classes.Form}>
        <nav>
          <button
            className={signUpActive ? classes.active : null}
            onClick={this.signUpClickHandler}
          >
            Sign Up
          </button>
          <button
            className={signUpActive ? null : classes.active}
            onClick={this.logInClickHandler}
          >
            Log In
          </button>
        </nav>
        {signUpActive ? <SignUp /> : <LogIn />}
        <button className={classes.SubmitButton}>Get Started</button>
      </div>
    );
  }
}

export default Form;
