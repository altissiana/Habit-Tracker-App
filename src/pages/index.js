import * as React from 'react';
import Layout from '../components/layout';
import { GlobalStyle } from '../utils/Global';


export default function IndexPage() {
  return (
    <Layout
      title="Habit Tracker"
      description="Welcome...">
        <p>You have not set any new habits.</p>
      <GlobalStyle />
    </Layout> 
  );
}