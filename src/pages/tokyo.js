import * as React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';

function TokyoData() {
  const data = useStaticQuery(graphql`
    query Tokyo {
      weather {
        getCityByName(name: "Tokyo") {
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
    <p>Tokyo</p>
    <p>Weather:{data.weather.getCityByName.weather.summary.description}</p>
    <p>Temperature: {data.weather.getCityByName.weather.temperature.actual}</p>
    <Link to="/">Home</Link>

  </div>;
}

export default TokyoData;
