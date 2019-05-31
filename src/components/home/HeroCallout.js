import React from 'react';
import { Link } from 'gatsby';
import styles from './HeroCallout.module.css';

export default () => (
  <div className={styles.callout}>
    <Link to="/security-management/">
      <span className={styles.pill}>New</span>
      <span className={styles.text}>Introducing Security Management</span>
      <span className={styles.arrow}>&rarr;</span>
    </Link>
  </div>
);
