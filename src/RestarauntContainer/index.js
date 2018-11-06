import React, {Component} from 'react';
import SearchBar from '../SearchBar';

class RestarauntContainer extends Component {
  constructor() {
    super();

    this.state = {
      restaraunts: []
    }
  }

//GET --header "Accept: application/json" --header "user-key: 95f432cefc027eaa7c0c7881e0edd2e7"
//https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&q=italian

  getRestaraunts = async (searchQuery) => {
    // Where We will make our fetch call to get all the restaraunts
    const restaraunts = await fetch('https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&q=' + searchQuery, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'user-key': "95f432cefc027eaa7c0c7881e0edd2e7"
            }
          });
    const restarauntsParsedJSON = await restaraunts.json();
    console.log(restarauntsParsedJSON);
    return restarauntsParsedJSON
  }

  componentDidMount(){
  // get ALl the restaraunts, on the intial load of the APP
  this.getRestaraunts().then((restaraunts) => {
    this.setState({restaraunts: restaraunts.data})
  }).catch((err) => {
    console.log(err);
  })
  /// Where you call this.getRestaraunts
}




  render() {
    return(
      <div>
        <h1> restaraunt container </h1>
        <SearchBar getRestaraunts = {this.getRestaraunts} />
      </div>
    )
  }
}

export default RestarauntContainer;
