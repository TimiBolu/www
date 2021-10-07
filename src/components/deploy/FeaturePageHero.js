import React from 'react';
import { Grid } from '../grid/Grid';
import styles from './FeaturePageHero.module.css';
import { LeadForm } from '../lead-form/LeadForm';

export default ({ h1, summary, leadFormId }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.content}>
        <h5>Aptible Features</h5>
        {h1}
        {summary}
        <div className={styles.leadForm}>
          <LeadForm id={leadFormId} />
        </div>
      </div>
    </Grid>
  </div>
);
