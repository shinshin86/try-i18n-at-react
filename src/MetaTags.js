import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = ({ messages }) => (
  <Helmet>
    <title>{messages['Meta.Title']}</title>
    <meta name="description" content={messages['Meta.Description']} />
  </Helmet>
);

export default MetaTags;
