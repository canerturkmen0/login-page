import React from 'react';

import classes from './LogIn.css';

const login = props => (
  <div className={classes.LogIn}>
    <h1>Welcome Back!</h1>
    <input type="text" placeholder="Email Address*" required/>
    <input type="text" placeholder="Password*" required/>
  </div>
);

export default login;
