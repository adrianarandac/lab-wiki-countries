import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const params = useParams(); // const {id} = useParams()

  const countryList = props.countries;
  const foundCountry = countryList.find(
    (country) => country.alpha3Code === params.id
  );

  const getBorderName = (bordersList) =>
    props.countries
      .filter((country) => bordersList.includes(country.alpha3Code))
      .map((borders) => borders.name.common);

  return (
    <div>
      <div>
        <h1>Country: {foundCountry.name.official}</h1>
        <h3>Area: {foundCountry.area}</h3>
        <ul>
          Borders:{' '}
          {foundCountry.borders.map((border) => {
            return (
              <li>
                <Link to={border} style={{ textDecoration: 'none' }}>
                  · {getBorderName(border)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
