import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Features.module.css';
import ArrowButton from '../buttons/ArrowButton';
import beyondLeftArrow from '../../images/comply/beyond-left.svg';
import beyondRightArrow from '../../images/comply/beyond-right.svg';

export default () => (
  <div className={styles.container} style={{ paddingTop: '80px' }}>
    <div className={styles.intro}>
      <Grid>
        <div className={styles.content}>
          <h1 className="hero">
            Beyond Compliance
          </h1>
          <p className="L">
            Compliance is what you need to do, it's the requirements. What you
            really want is to move Beyond Compliance, so that you're protecting
            data and being secure.
          </p>

          <div className={styles.beyondLeft}>
            <img src={beyondLeftArrow} alt="arrow" />
          </div>

          <div className={styles.beyondRight}>
            <img src={beyondRightArrow} alt="arrow" />
          </div>
        </div>

        <div className={styles.workflows}>
          <h1>Automate Security and Compliance with Workflows</h1>
          <p>
            Aptible Comply Workflows automate the management of your company’s
            security, keeping track of everything you have to do to maintain
            compliance (and stay secure).
          </p>
          <ArrowButton to="/comply/workflows/" text="Learn More" />
        </div>
      </Grid>
    </div>
  </div>
);
