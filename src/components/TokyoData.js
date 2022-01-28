import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

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
  return <div>{data.weather.getCityByName.weather.temperature.min}</div>;
}

export default TokyoData;
