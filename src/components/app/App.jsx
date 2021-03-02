import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../home/Home';
import Services from '../servicesPage/Services';
import Solutions from '../solutions/Solutions';
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/solutions" component={Solutions} />
          <Route exact path="/services" component={Services} />
          {/* <Route exact path="/products" component={Products} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </Router>
    </div>
  );
}
