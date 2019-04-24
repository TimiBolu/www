import React from 'react';
import { Link } from 'gatsby';
import styles from './Button.module.css';

export default ({ to, theme, children }) => (
  <Link to={to} className={`${styles.button} ${theme ? styles[theme] : ''}`}>
    {children}
  </Link>
);
