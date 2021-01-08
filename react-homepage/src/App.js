import React from 'react';
import ScrollToTop from 'react-router-scroll-top';
import './css/homepage.css';
import Homepage from './components/Home/Homepage';
import Gallery from './components/Gallery/Gallery';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function MyHomepage() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/gallery/:title">
            <Gallery />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default MyHomepage;