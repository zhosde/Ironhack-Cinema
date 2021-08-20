import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import movies from "../data/movies.json";
import Summary from "./Summary";

class App extends React.Component {
  state = {
    moviesArr: movies,
    searchedMoviesArr: movies,
  };

  deleteMovieHandler = (id) => {
    this.setState((prevState) => {
      return {
        moviesArr: prevState.moviesArr.filter((movie) => movie.id !== id),
      };
    });
  };

  // deleteMovieHandler = id => {
  //   const moviesCopy = [...this.state.moviesArr];
  //   const movieIndex = moviesCopy.findIndex(movie => movie.id ===id)
  //   moviesCopy.splice(movieIndex, 1)
  //   this.setState({
  //     moviesArr: moviesCopy
  //   })
  // }

  addMovieHandler = (theMovie) => {
    const moviesCopy = [...this.state.moviesArr];
    moviesCopy.push(theMovie);
    this.setState({
      moviesArr: moviesCopy,
    });
  };

  findMovieHandler = (input) => {
    const moviesCopy = [...this.state.moviesArr];
    let filteredMovies = moviesCopy.filter((movie) => {
      return movie.title.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({
      searchedMoviesArr: filteredMovies,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div id="emptyBanner">
          {this.state.searchedMoviesArr.length === 0 && (
            <span>Currently no movies available</span>
          )}
        </div>
        <Summary listOfMovies={this.state.searchedMoviesArr} />
        <Main
          searchedMovies={this.state.searchedMoviesArr}
          clickToDelete={this.deleteMovieHandler}
          addTheMovie={this.addMovieHandler}
          findTheMovie={this.findMovieHandler}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
