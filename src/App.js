import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AllBeers from './AllBeers';
import Header from './Header';
import EachBeer from './EachBeer';
import RandomBeer from './RandomBeer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/all-beers" render={() => <AllBeers />} />
          <Route exact path="/random-beers" render={() => <RandomBeer />} />
          <Route exact path="/new-beer" />
          <Route
            exact
            path="/beers/:id"
            render={(props) => <EachBeer {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
