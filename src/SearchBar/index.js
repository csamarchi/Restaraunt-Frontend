import React, {Component} from 'react';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchQuery: ''
    }
  }

  handleSubmit = (e) => {
   e.preventDefault();
   this.props.getRestarauntsWithQuery(this.state.searchQuery);
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
