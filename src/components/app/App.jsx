import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../home/Home';
import News from '../news/News';
import './App.css';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
        </Switch>
      </Router>
    </div>
  );
}
