import React from 'react';
import MenuHeader from './MenuHeader';


export default ({ children, points = 0 }) => (
  <div>
    <MenuHeader {...{ points }} />
    {children}
  </div>
);
