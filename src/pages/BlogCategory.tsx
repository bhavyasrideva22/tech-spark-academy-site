
import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Blog from './Blog';

const BlogCategory = () => {
  const { category } = useParams<{ category: string }>();
  
  // List of valid categories
  const validCategories = [
    'tech-insights',
    'success-stories',
    'industry-news',
    'tutorials',
    'events'
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  // If category doesn't exist, redirect to main blog page
  if (!category || !validCategories.includes(category)) {
    return <Navigate to="/blog" replace />;
  }
  
  // Use the main Blog component but with the category filter applied
  return <Blog />;
};

export default BlogCategory;
