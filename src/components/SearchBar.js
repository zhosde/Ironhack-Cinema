import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "",
    };
  }

  handleSearch = async(event) => {
   await this.setState({ searchWord:event.target.value });
    this.props.findTheMovie(this.state.searchWord);
    // this.setState({
    //     searchWord:""
    // })
  }

  render() {
    return (
      <div>
        <input
          type="text"
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
