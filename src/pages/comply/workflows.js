import React from 'react';
import { Helmet } from 'react-helmet';
import AptibleLayout from '../../components/layouts/AptibleLayout';
import Hero from '../../components/comply/workflows/Hero';
import Features from '../../components/comply/workflows/Features';
import UseCases from '../../components/home/UseCases';
import HowItWorks from '../../components/comply/workflows/HowItWorks';
import WhoUses from '../../components/comply/WhoUses';
import ZeroTo from '../../components/footer/ZeroTo';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible Comply | Automate Security and Compliance</title>
      <meta name="description" content="Aptible Comply Workflows automate the management of your company’s security, keeping track of everything you have to do to maintain compliance (and stay secure)." />
    </Helmet>
    <Hero />
    <Features />
    <UseCases />
    <HowItWorks />
    <WhoUses />
    <ZeroTo />
  </AptibleLayout>
);
