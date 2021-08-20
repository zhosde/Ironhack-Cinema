import React, { Component } from 'react'

export default class Summary extends Component {
    render() {

        let totalRating = this.props.listOfMovies.reduce((a, b) => {
          return a + b.rating;
        }, 0);
       let averageRating = (
         totalRating / this.props.listOfMovies.length
       ).toFixed(2);

        return (
          <div id="summary">
            <p>Number of Movies: {this.props.listOfMovies.length}</p>
            <p>Average Rating: {averageRating}</p>
          </div>
        );
    }
}
