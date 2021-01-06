import React from 'react';
import './css/homepage.css';
import Homepage from './components/Home/Homepage';
import Gallery from './components/Gallery/Gallery';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

function MyHomepage() {
  return (
    <Router>
    <Switch>
      <Route path="/gallery/:title">
        <Gallery />
      </Route>
      <Route path="/">
        <Homepage />
      </Route>
    </Switch>
  </Router>
  );
}

export default MyHomepage;