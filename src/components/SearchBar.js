import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "",
    };
  }

  handleSearch = (event) => {
    this.setState({ searchWord:event.target.value }, () => {
      this.props.findTheMovie(this.state.searchWord)
    })
  }
  
  render() {
    return (
      <div>
        <input
          type="search"
          name="searchWord"
          placeholder="Search..."
          value={this.state.searchWord}
          onChange={this.handleSearch}
        ></input>
      </div>
    );
  }
}
export default SearchBar;
