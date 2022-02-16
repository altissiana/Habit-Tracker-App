import * as React from 'react';
import Layout from '../components/layout';
import { GlobalStyle } from '../utils/Global';

export default function StatsPage() {
  return (
    <Layout 
      title="Statistics"
      description="Look at you! Check out your progress in this screen.">
      <GlobalStyle />    
    </Layout>
  );
}
