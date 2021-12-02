import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';
import allData from './countries.json';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Router>
          <div className="container w-100 d-flex justify-content-around">
            <Route
              path={'/'}
              render={(props) => (
                <CountriesList {...props} countries={allData} />
              )}
            />
            <Route className="position-fixed"
              path={'/:id'}
              render={(props) => (
                <CountryDetails {...props} countries={allData} />
              )}
            />
          </div>
        </Router>
      </div>
    </div>
  );
}
export default App;
