import React from 'react';
import { Link } from 'gatsby';
import styles from './Card.module.css';
import Arrow from '../shared/Arrow';
import videoPlayIcon from '../../images/video-play.svg';
import customerCards from '../../data/customer-cards.json';

import atriumPhoto from '../../images/customers/photos/atrium-justin-kan.jpg';
import formaticPhoto from '../../images/customers/photos/fortmatic-arthur-jen.jpg';

import ableHealthLogo from '../../images/customers/logos/able-health.png';
import atriumLogo from '../../images/customers/logos/atrium.png';
import fortmaticLogo from '../../images/customers/logos/fortmatic.svg';
import healthifyLogo from '../../images/customers/logos/healthify.svg';
import mdsaveLogo from '../../images/customers/logos/mdsave.svg';
import pathaiLogo from '../../images/customers/logos/pathai.png';
import snapsLogo from '../../images/customers/logos/snaps.png';
import vergesenseLogo from '../../images/customers/logos/vergesense.svg';
import virtaLogo from '../../images/customers/logos/virta.svg';

const photos = {
  atrium: atriumPhoto,
  fortmatic: formaticPhoto
};

const logos = {
  ableHealth: ableHealthLogo,
  atrium: atriumLogo,
  fortmatic: fortmaticLogo,
  healthify: healthifyLogo,
  mdsave: mdsaveLogo,
  pathAI: pathaiLogo,
  snaps: snapsLogo,
  vergesense: vergesenseLogo,
  virta: virtaLogo
};


export default ({ customer }) => {
  const customerData = customerCards[customer];

  const to = customerData.link;
  const image = photos[customer];
  const ContainerElement = to ? Link : 'div';

  return (
    <ContainerElement to={to} className={`${styles.container} ${to ? styles.linkedContainer : ''}`}>
      {image &&
        <div className={styles.imageContainer}>
        {customerData.videoLength && 
            <div className={styles.videoLength}>
              <div className={styles.videoPlayIcon}>
                <img src={videoPlayIcon} alt="Video" />
              </div>
              <p className="L-bold">{customerData.videoLength}</p>
            </div>
          }
          <img src={image} className={styles.image} alt="Customer" />
        </div>
      }

      <div className={styles.card}>
        <div className={`${styles.arrow} ${image ? styles.withImage: ''}`}><Arrow /></div>

        {logos[customer] &&
          <img src={logos[customer]} className={styles.logo} alt="Customer logo" />
        }

        {customerData.headline &&
          <h5 dangerouslySetInnerHTML={{ __html: customerData.headline }}></h5>
        }

        {customerData.text &&
          <p>{customerData.text}</p>
        }

        {customerData.author &&
          <p className={styles.author}>{customerData.author}</p>
        }

        {to &&
          <div className={styles.readMore}>
            <p>Read More</p>
          </div>
        }

        {customerData.tags &&
          <div className={styles.tags}>
            {customerData.tags.map((tag, idx) => {
              return <span key={idx} className={styles.tag}>{tag}</span>
            })}
          </div>
        }

      </div>
    </ContainerElement>
  )
};
