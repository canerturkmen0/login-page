import React from 'react';

import classes from './SignUp.css';
import SubmitButton from '../SubmitButton/SubmitButton';

const signup = props => (
  <div className={classes.SignUp}>
    <h1>Sign Up for Free</h1>
    <div className={classes.FullName}>
      <input type="text" placeholder="First Name*" required />
      <input type="text" placeholder="Last Name*" required />
    </div>
    <input type="text" placeholder="Email Address*" required />
    <input type="text" placeholder="Set A Password*" required />
    <SubmitButton />
  </div>
);

export default signup;
