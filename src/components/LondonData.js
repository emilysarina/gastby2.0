import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

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
  return data.weather.getCityByName.weather.temperature.min;
}

export default LondonData;
