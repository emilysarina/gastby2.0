import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

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
  return <div>{data.weather.getCityByName.weather.temperature.min}</div>;
}

export default NewYorkData;
