import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/all-beers">All Beers</Link>
        <br />
        <Link to="/random-beers">Random Beer</Link>
        <br />
        <Link to="/new-beer">New Beer</Link>
      </div>
    );
  }
}

export default Header;
