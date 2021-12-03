import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div>
      {props.countries.map((country) => {
        return (
          <div className='border-bottom w-75 d-flex' key={country.alpha3code}>
                  <img
              src={`https://flagpedia.net/data/flags/w1160/${country.alpha2Code.toLowerCase()}.png`}
              alt={'country flag'}
              style={{ maxWidth: '60px' }}
            />
            <h3><Link to={country.alpha3Code} style={{ textDecoration: 'none' }}> {country.name.official}</Link></h3>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
