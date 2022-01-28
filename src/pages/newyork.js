import * as React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';

function NewYorkData() {
  const data = useStaticQuery(graphql`
    query NewYork {
      weather {
        getCityByName(name: "New York") {
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
    <p>New York</p>
    <p>Weather:{data.weather.getCityByName.weather.summary.description}</p>
    <p>Temperature: {data.weather.getCityByName.weather.temperature.actual}</p>
    <Link to="/">Home</Link>
  </div>;
}

export default NewYorkData;
