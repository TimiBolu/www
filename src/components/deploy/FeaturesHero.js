import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './FeaturesHero.module.css';
import SignupButton from '../signup/SignupButton';

export default () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible Deploy Features</h5>
        <h1 className="hero">
          Automate
          <br className="mobileOnly" /> your
          <br className="desktopOnly" /> security controls
        </h1>
        <SignupButton text="Start with Deploy" product="deploy" />
      </div>
    </Grid>
  </div>
);
