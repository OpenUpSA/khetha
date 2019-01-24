import React from 'react';
import Header from './Header';


export default ({ children, points }) => (
  <div>
    <Header {...{ points }} />
    {children}
  </div>
);
