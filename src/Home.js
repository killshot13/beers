import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Home extends Component{
  render(){
  return (
    <div>
    <Link to='/all-beers'>All Beers</Link>
    <br/>
    <Link to='/random-beers'>Random Beer</Link>
    <br/>
    <Link to='/new-beer'>New Beer</Link>
    </div>
  );
}
}

export default Home;
