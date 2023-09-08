import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './common/header';
import Home from './pages/home';
import About from './pages/aboutUs';
import Footer from './common/footer';
import './App.css'
import searchResults from './pages/searchResults';
import brandDetails from './pages/brandDetails';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './common/loading/loading';
import { PrivateRoute } from './routes/PrivateRoute';
import Login from './components/Login';
import forBusiness from './pages/forBusiness';

const App = () => {
  const showFooter = true;

  const { isLoading, error,isAuthenticated,loginWithRedirect } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if(!isLoading && !isAuthenticated)
  {
    loginWithRedirect();
    return <Loading />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className='h-full'>
        <Header />
        <div className="wrapper h-full">
          {/* <ThemeProvider value=''> */}
            <Switch>
              <Route exact path="/" isAuthenticated={isAuthenticated} component={Home} />
              <PrivateRoute path={'/searchResults'} isAuthenticated={isAuthenticated} component={searchResults} />
              <PrivateRoute path={'/brandDetails'} isAuthenticated={isAuthenticated} component={brandDetails} />
              <Route path={"/aboutus"} component={About} />
              <Route path={"/for_business"} component={forBusiness} />
              {/* <Redirect from="*" to="/" /> */}
            </Switch>
          {/* </ThemeProvider> */}
        </div>
        { showFooter && <Footer /> }
      </div>
    </Router>
  );
}

export default App;
