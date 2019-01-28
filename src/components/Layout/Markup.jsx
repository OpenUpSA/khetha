import React from 'react';
import MenuHeader from './MenuHeader';


export default ({ children, points }) => (
  <div>
    <MenuHeader {...{ points }} />
    {children}
  </div>
);
