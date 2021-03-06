import * as React from 'react';
import { useState } from 'react';

import { Link } from 'gatsby';

import LondonData from './london.js';
import NewYorkData from './newyork.js';
import TokyoData from './tokyo.js';

const IndexPage = () => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <Link to="/london">London</Link>
        <Link to="/tokyo">Tokyo</Link>
        <Link to="/newyork">New York</Link>
      </div>
      <div>
        <select onChange={handleChange} name="cars" id="cars">
          <option value="">Select City</option>
          <option value="London">London</option>
          <option value="New York">New York</option>
          <option value="Tokyo">Tokyo</option>
        </select>
      </div>
      {value === 'London' ? (
        <LondonData />
      ) : value === 'New York' ? (
        <NewYorkData />
      ) : value === 'Tokyo' ? (
        <TokyoData />
      ) : (
        ''
      )}
    </div>
  );
};

export default IndexPage;
