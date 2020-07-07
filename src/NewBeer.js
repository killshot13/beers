import React, { Component } from 'react';
import axios from 'axios';
class NewBeer extends Component {
  state = {
    beer: {},
    showForm: false         
  };

  async componentDidMount() {
    let res = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new');
    this.setState({
      beer: res.data,
    });
  }

toggleForm = () =>
  {
      this.setState({
          showForm: !this.setState.showForm
      })
  }
handleInputChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}
render() {
    return (
        <div>
        <button onClick={this.toggleForm}> NewBeer</button>
        <form method="post">
            <label for="beerName">Beer Name</label>
            <input onChange={this.handleInputChange} type="text" id="beerName" name="beerName" />
            <br/>
            <label for="tagLine">Tag Line</label>
            <input onChange={this.handleInputChange} type="text" id="tagLine" name="tagLine" />
            <br/>
            <label for="descr">Description</label>
            <input onChange={this.handleInputChange} type="text" id="desc" name="desc" />                
            <br/>
            <label for="firstBrewed">First Brewed</label>
            <input type="text" id="firstBrewed" name="firstBrewed" />               
            <br/>
            <label for="brewersTips">Brewers Tips</label>
            <input type="text" id="brewersTips" name="brewersTips" />
            <br/>
            <label for="attLevel">Attentuation Level</label>
            <input type="text" id="attLevel" name="attLevel" />
            <br/>
            <input type="submit" value="submit" />
        </form>
    </div>
    );  
  }
}
export default NewBeer;

