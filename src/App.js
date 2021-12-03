import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import allData from './countries.json';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Router>
          <Switch>
            <div
              className="container w-100 d-flex justify-content-around"
              style={{ height: '100px' }}
            >
              <Route
                
                path={'/'}
                render={(props) => (
                  <CountriesList {...props} countries={allData} />
                )}
              />
              <Route
                exact
                className="position-fixed"
                path={'/:id'}
                render={(props) => (
                  <CountryDetails {...props} countries={allData} />
                )}
              />
            </div>
              <Route component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;
