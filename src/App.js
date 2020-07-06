import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import AllBeers from './AllBeers'

class App extends Component {
  render(){
  return (
    <div>
    
    <Switch>

    <Route exact path='/' render={()=> <Home />}/>
    <Route exact path='/all-beers' render={()=> <AllBeers />}/>
    <Route exact path='/random-beers'/>
    <Route exact path='/new-beer'/>

    </Switch>
    </div>
  );
}
}

export default App;
