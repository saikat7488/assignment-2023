import React from 'react';
import CustomSkeletonLoader from './CustomSkeletonLoader';

const MyComponent = () => {
  return (
    <div>
      <h1>My Content</h1>
      <CustomSkeletonLoader count={1} width="100%" height="20px" />
      {/* Render other content */}
    </div>
  );
};

export default MyComponent;
