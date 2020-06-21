import React from 'react';
import { Router } from '@reach/router';
import Layout from './components/Layout';

export default function App() {

  return (
    <Router>
      <Layout
        path = '/'
      >

      </Layout>
    </Router>
  )
}