import * as React from 'react';
import { useState } from 'react';
import LondonData from '../components/LondonData';
import NewYorkData from '../components/NewYorkData';
import TokyoData from '../components/TokyoData';

import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const [value, setValue] = useState('');

  // When dropdown is changed display different weather data

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <main>
      <h1>Weather App</h1>
      <select onChange={handleChange} name="cars" id="cars">
        <option value="London">London</option>
        <option value="New York">New York</option>
        <option value="Tokyo">Tokyo</option>
      </select>
      {value === 'London' ? (
        <LondonData />
      ) : value === 'New York' ? (
        <NewYorkData />
      ) : value === 'Tokyo' ? (
        <TokyoData />
      ) : (
        ''
      )}
    </main>
  );
};

export default IndexPage;
