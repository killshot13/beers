import React, { Component } from 'react';
import axios from 'axios';

class EachBeer extends Component {
  state = {
    beer: {},
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
    );
    console.log(res);
    // let currentBeer = res.data.find((beer) => {
    //   return beer._id == this.props.match.params.id;
    // });
    this.setState({
      beer: res.data,
    });
  }

  render() {
    console.log(this.props);
    return <div>{this.state.beer.name}</div>;
  }
}

export default EachBeer;
