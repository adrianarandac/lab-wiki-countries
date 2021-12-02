import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div>
      {props.countries.map((country) => {
        return (
          <div className='border-bottom' key={country.alpha3code}>
            <h3><Link to={country.alpha3Code} style={{ textDecoration: 'none' }}>· {country.name.official}</Link></h3>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
