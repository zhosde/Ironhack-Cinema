import React, { Component } from "react";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      genre: "",
      rating: "",
      imgUrl: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let {title, year, genre, rating, imgUrl} = this.state
    rating=Number(rating)
    this.props.addTheMovie({ title, year, genre, rating, imgUrl });
    // Reset
    this.setState({
      title: "",
      year: "",
      genre: "",
      rating: "",
      imgUrl: "",
    });
  };

//   handleTitle = (event) => {
//     this.setState({
//       title: event.target.value,
//     });
//   };

//   handleYear = (event) => {
//     this.setState({
//       year: event.target.value,
//     });
//   };

//   handleGenre = (event) => {
//     this.setState({
//       genre: event.target.value,
//     });
//   };

//   handleRating = (event) => {
//     this.setState({
//       rating: event.target.value,
//     });
//   };

//   handleImage = (event) => {
//     this.setState({
//       imgUrl: event.target.value,
//     });
//   };

  handleChange(event) {
    let { name, value, type } = event.target;
    if (type === "checkbox") {
      value = event.target.checked;
    }
    this.setState({ [name]: value });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={this.state.year}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={this.state.genre}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={this.state.rating}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Image:</label>
          <input
            type="text"
            name="imgUrl"
            value={this.state.imgUrl}
            onChange={(e) => this.handleChange(e)}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
