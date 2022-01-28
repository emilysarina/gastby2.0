import * as React from 'react';
import { useState } from 'react';

import { Link } from 'gatsby';

const IndexPage = () => {

  return (
    <main>
      <h1>Weather App</h1>
      <Link to="/london">London</Link>
      <Link to="/tokyo">Tokyo</Link>
      <Link to="/newyork">New York</Link>
    </main>
  );
};

export default IndexPage;
