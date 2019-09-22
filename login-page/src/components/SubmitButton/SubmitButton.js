import React from 'react';

import classes from './SubmitButton.css';

const submitButton = props => (
  <button onClick={props.submitClickHandler} className={classes.SubmitButton}>{props.buttonText}</button>
);

export default submitButton;
