import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllBeers extends Component {
  state = {
    beers: [],
  };

  async componentDidMount() {
    let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    this.setState({
      beers: res.data,
    });
  }

  searchBeers = async (event) => 
  {
    console.log("searchBeers")
    console.log(event.target.value)
    let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${event.target.value}`)
    this.setState({
      beers:res.data
    })
  }

  displayBeers = () => {
    return this.state.beers.map((eachBeer) => {
      return (
        <Link to={`/beers/${eachBeer._id}`}>
          <h1>{eachBeer.name}</h1>
          <img src={eachBeer.image_url} />
          <div>{eachBeer.tagline}</div>
          <div>{eachBeer.contributed_by}</div>
        </Link>
      );
    });
  };

  render() {
    return <div>
    <input onChange = {this.searchBeers} placeholder = "Search"></input>
    {this.displayBeers()}
    </div>;
  }
}

export default AllBeers;
