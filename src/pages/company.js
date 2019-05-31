import React from 'react';
import { graphql } from 'gatsby';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/company/Hero';
import Nav from '../components/shared/Nav';
import Vision from '../components/company/Vision';
import Values from '../components/company/Values';
import Team from '../components/company/Team';
import Join from '../components/company/Join';

const stickyNavItems = [
  { title: 'Vision', ref: null },
  { title: 'Values', ref: null },
  { title: 'Team', ref: null },
  { title: 'Careers', ref: null },
];

export default ({ data }) => (
  <AptibleLayout>
    <Hero />
    <Nav items={stickyNavItems} />
    <Vision />
    <Values />
    <Team members={data.employees.edges} />
    <Join />
  </AptibleLayout>
);

export const query = graphql`
  query {
    employees: allContentfulEmployee(
      sort: { fields: [name] }
    ) {
      edges {
        node {
          name
          jobTitle
          slug
          bio {
            bio
          }
          professionalPhoto {
            file {
              url
            }
          }
          funPhoto {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
