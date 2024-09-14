import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';

const Dashboard = () => {
  // Fetch categories from Redux store
  const categories = useSelector(state => state.widgets.categories);

  // Log categories to console for debugging
  console.log(categories);

  // Add a fallback message if there are no categories
  if (!categories || categories.length === 0) {
    return <div>No categories available.</div>;
  }

  return (
    <div className="dashboard">
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;










