import * as React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';

function LondonData() {
  const data = useStaticQuery(graphql`
    query London {
      weather {
        getCityByName(name: "London") {
          weather {
            temperature {
              min
              max
              feelsLike
              actual
            }
            summary {
              title
              description
              icon
            }
            wind {
              deg
              speed
            }
          }
        }
      }
    }
  `);
  return <div>
    <p>London</p>
    <p>Weather: {data.weather.getCityByName.weather.summary.description}</p>
    <p>Temperature: {data.weather.getCityByName.weather.temperature.actual}</p>
    <Link to="/">Home</Link>
  </div>;
}

export default LondonData;
