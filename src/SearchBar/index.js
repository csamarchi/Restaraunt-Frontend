import React, {Component} from 'react';
import RestarauntContainer from '../RestarauntContainer'
import { Button, Icon, Label, Input } from 'semantic-ui-react'

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchQuery: ''
    }
  }

  handleSubmit = (e) => {
   e.preventDefault();
   this.props.getRestaurantsWithQuery(this.state.searchQuery);
 }

 handleChange = (e) => {
   this.setState({[e.currentTarget.name]: e.currentTarget.value});
 }

  render() {
    return(
      <form class="SearchBar" onSubmit={this.handleSubmit}>
          <input type='text' name="searchQuery" placeholder="Search..." value={this.state.searchQuery} onChange={this.handleChange}/>
          <button className='searchButton' type='submit'> <img src='' />🔍</button>
      </form>
    )
  }
}

export default SearchBar;
