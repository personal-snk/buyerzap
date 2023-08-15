import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './common/header';
import Home from './pages/home';
import About from './pages/aboutUs';
import Footer from './common/footer';
import './App.css'
import searchResults from './pages/searchResults';
import brandDetails from './pages/brandDetails';

const App = () => {
  const showFooter = true;
  return (
    <Router>
      <div className='h-full'>
        <Header />
        <div className="wrapper h-full">
          {/* <ThemeProvider value=''> */}
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={'/searchResults'} component={searchResults} />
              <Route path={'/brandDetails'} component={brandDetails} />
              <Route path={"/aboutus"} component={About} />
            </Switch>
          {/* </ThemeProvider> */}
        </div>
        { showFooter && <Footer /> }
      </div>
    </Router>
  );
}

export default App;
