import React from 'react';
import FilterBar from '../components/FilterBar';
import BlogList from '../components/BlogList';

const Home = () => {
  return (
    <div className="space-y-8">
      <FilterBar />
      <BlogList />
    </div>
  );
};

export default Home;