import React, {Component} from 'react';
import RestarauntContainer from '../RestarauntContainer'

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
      <form onSubmit={this.handleSubmit}>
          <input type='text' name="searchQuery" placeholder="Search..." value={this.state.searchQuery} onChange={this.handleChange}/>
          <input type='submit' value="Submit" />
        </form>
    )
  }
}

export default SearchBar;
