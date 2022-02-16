import * as React from 'react';

import Layout from '../components/layout';
import { GlobalStyle } from '../utils/Global';
import Habits from '../components/Habits';

const AddPage = () => {
  return (
    <Layout
      title="Add New Habit"
      description="Here is where you start to improving your life by adding new habits.">
      <Habits/>
    <GlobalStyle />
    </Layout>
  );
}

export default AddPage;