import React from 'react';
import Head from 'next/head';
import Cover from '../components/blocks/Cover';
import favicon from '../assets/favicon.jpg';

export default () => (
  <div>
    <Head>
      <link rel='shortcut icon' type='image/x-icon' href={favicon} />
      <title>Full range of services to develop a successful site</title>
    </Head>
    <Cover />
  </div>
);
