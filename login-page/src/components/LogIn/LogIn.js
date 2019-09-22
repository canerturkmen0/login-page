import React from 'react';

import classes from './LogIn.css';
import SubmitButton from '../SubmitButton/SubmitButton';

const login = props => (
  <div className={classes.LogIn}>
    <h1>Welcome Back!</h1>
    <input type="text" placeholder="Email Address*" required/>
    <input type="text" placeholder="Password*" required/>
    <SubmitButton />
  </div>
);

export default login;
