import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import WithNavLink from './WithNavLink';
import WithoutNavLink from './WithoutNavLink';
class App extends Component {
  render() {
    return (
      <Router>
        <h1>
          NavLink is a react router component can save a lot of time while using
          state realted to url path.
        </h1>

        <h2>
          Check differences of <bold>WithNavLink.js</bold> and{' '}
          <bold>WithoutNavLink.js</bold>
        </h2>

        <h2>
          <Link to="/without-nav-link">{`Tab active state without <NavLink />`}</Link>
        </h2>
        <h2>
          <Link to="/with-nav-link">{`Tab active state with <NavLink />`}</Link>
        </h2>
        <Switch>
          <Route path="/without-nav-link" component={WithNavLink} />
          <Route path="/with-nav-link" component={WithoutNavLink} />
        </Switch>
      </Router>
    );
  }
}

export default App;
