import { Redirect, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const params = useParams(); // const {id} = useParams()

  const countryList = props.countries;
  const foundCountry = countryList.find(
    (country) => country.alpha3Code === params.id
  );

  if (!foundCountry) return <Redirect to="/error/" />;


  const getBorderName = (bordersList) =>
    props.countries
      .filter((country) => bordersList.includes(country.alpha3Code))
      .map((borders) => borders.name.common);

  return (
    <div className="w-50 p-3 h-100">
      <div className="w-25 border-2 border p-3 h-0 position-fixed">
        <h1>{foundCountry.name.official}</h1>
        <img
          src={`https://flagpedia.net/data/flags/w1160/${foundCountry.alpha2Code.toLowerCase()}.png`}
          alt={'country flag'}
          style={{ maxWidth: '60px' }}
        />
        <hr />
        <div className="bg-white">
          <h3>
            Area: <i>{foundCountry.area} m2</i>
          </h3>
          <ul>
            Borders:{' '}
            {foundCountry.borders.map((border) => {
              return (
                <li className="list-decoration-none ">
                  <Link to={border} style={{ textDecoration: 'none' }}>
                    {getBorderName(border)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
