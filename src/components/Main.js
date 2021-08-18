import React from "react";
import "./App.css";
import Movie from "./Movie";
import movies from "../data/movies.json";

class Main extends React.Component {
  state = {
    moviesArr: movies,
  };

  deleteMovieHandler = id => {
    const moviesCopy = [...this.state.moviesArr];
    const movieIndex = moviesCopy.findIndex(movie => movie.id ===id)
    moviesCopy.splice(movieIndex, 1)
    this.setState({
      moviesArr: moviesCopy
    })
  }

  // renderMovies = () => {
  //   return this.state.moviesArr.map(movie => {
  //     return <Movie key={movie.id} {...movie} />
  //   })
  // }

  render() {
    return (
      <main className="movie-container">
        {this.state.moviesArr.map((movie) => {
          return (
            <Movie
              key={movie.id}
              {...movie}
              clickToDelete={() => this.deleteMovieHandler(movie.id)}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
