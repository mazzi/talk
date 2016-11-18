import React from 'react';
import styles from './Success.css';

const Success = () => (
  <div className={styles.container}>
    <svg className={styles.checkmark} viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
      <circle className={styles.circle} cx="26" cy="26" r="25" fill="none"></circle>
      <path className={styles.check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
    </svg>
  </div>
);

export default Success;