import * as React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo';

export default function AddPage() {
  return (
    <>
      <Seo 
        title="Add new Habit"
        description="Here is where you start to improving your life by adding new habits."
      />
      <main>
        <h1>Add New Habit</h1>
        <Link to="/">Cancel</Link>
      </main>
    </>
  )
}
