import React from 'react';
import Styles from './Styles.scss';

export const Spinner = () => (
  <div className={Styles.spinnerContainer}>
    <div className={Styles.inner}></div>
    <div className={Styles.outer}></div>
  </div>
);