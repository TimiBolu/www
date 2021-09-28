import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './Pricing.module.css';
import Deploy from './Deploy';

const Pricing = () => (
  <Grid>
    <div className={styles.hero}>
      <h1 className="XL">Aptible Pricing</h1>
      <p className="XL">Plans that scale to meet your needs</p>
    </div>

    <Deploy />
  </Grid>
)

export default Pricing;