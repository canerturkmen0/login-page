import React from 'react';

import classes from './SignUp.css';

const signup = props => (
  <div className={classes.SignUp}>
    <h1>Sign Up for Free</h1>
    <div className={classes.FullName}>
      <input type="text" placeholder="First Name*"/>
      <input type="text" placeholder="Last Name*"/>
    </div>
    <input type="text" placeholder="Email Address*"/>
    <input type="text" placeholder="Set A Password*"/>
  </div>
);

export default signup;
