import React from "react";
import "./App.css";
import Movie from "./Movie";
import movies from "../data/movies.json";

class Main extends React.Component {
  state = {
    moviesArr: movies,
  };

  deleteMovieHandler = id => {
    this.setState(prevState => {
      return {moviesArr: prevState.moviesArr.filter (movie => movie.id !==id)}})
  }

  // deleteMovieHandler = id => {
  //   const newMoviesArr = this.state.moviesArr.filter(movie => {
  //     return movie.id !== id
  //   })
  //   this.setState({
  //     moviesArr: newMoviesArr
  //   });
  // }

  // deleteMovieHandler = id => {
  //   const moviesCopy = [...this.state.moviesArr];
  //   const movieIndex = moviesCopy.findIndex(movie => movie.id ===id)
  //   moviesCopy.splice(movieIndex, 1)
  //   this.setState({
  //     moviesArr: moviesCopy
  //   })
  // }

  // renderMovies = () => {
  //   return this.state.moviesArr.map(movie => {
  //     return <Movie key={movie.id} {...movie} />
  //   })
  // }

  render() {
    return (
      <main className="movie-container">
        {this.state.moviesArr.length === 0 && <span>Currently no movies</span>}
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
