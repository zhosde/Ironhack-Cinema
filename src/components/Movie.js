import React from "react";
import "./App.css";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLikes: 0,
    };
  }
  clickBtn = () => {
    this.setState((prevState) => {
      return {
        numberOfLikes: prevState.numberOfLikes + 1,
      };
    });
  };
  render() {

    // let classList = this.state.numberOfLikes>=5 ? ' movie-popular' : ''

    // inline styling
    const styleObj = {
      color: "darkblue",
      backgroundColor: this.state.numberOfLikes >=5 ? 'azure' : 'white'
    };

    return (
    //   <section className={'movie ' + classList}>
      <section className='movie' style={styleObj}>
        <h5>{this.props.title}</h5>
        <p>Number of Likes: {this.state.numberOfLikes}</p>
        <button onClick={this.clickBtn}>Like it!</button>
      </section>
    );
  }
}

export default Movie