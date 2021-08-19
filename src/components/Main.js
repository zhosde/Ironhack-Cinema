import React from "react";
import "./App.css";
import Movie from "./Movie";
import movies from "../data/movies.json";
import AddMovie from "./AddMovie";
import SearchBar from "./SearchBar";

class Main extends React.Component {
  state = {
    moviesArr: movies,
    searchedMovies: movies,
  };

  deleteMovieHandler = (id) => {
    this.setState((prevState) => {
      return {
        moviesArr: prevState.moviesArr.filter((movie) => movie.id !== id),
      };
    });
  };

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

  addMovieHandler = (theMovie) => {
    const moviesCopy = [...this.state.moviesArr];
    moviesCopy.push(theMovie);
    this.setState({
      moviesArr: moviesCopy,
    });
  };

  findMovieHandler = (input) => {
    const moviesCopy = [...this.state.moviesArr];
    let filteredMovies = moviesCopy.filter((movie)=> {
      return movie.title.toLowerCase().includes(input.toLowerCase())
    })
    this.setState({
      searchedMovies: filteredMovies,
    });
  };

sortMovies = (method) => {
     if (method === "title") {
       return this.setState({
         searchedMovies: this.state.searchedMovies.sort((a, b) =>
           a.title.localeCompare(b.title)
         ),
       });
     } else {
       return this.setState({
         searchedMovies: this.state.searchedMovies.sort(
           (a, b) => b.rating - a.rating
         ),
       });
      }
    }

  render() {
    return (
      <main>
        <SearchBar findTheMovie={this.findMovieHandler} />
        <button onClick={() => this.sortMovies("title")}>Sort by Title</button>
        <button onClick={() => this.sortMovies("rating")}>
          Sort by Rating
        </button>
        <AddMovie addTheMovie={this.addMovieHandler} />
        <section className="movie-container">
          {this.state.moviesArr.length === 0 && (
            <span>Currently no movies</span>
          )}
          {this.state.searchedMovies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                {...movie}
                clickToDelete={() => this.deleteMovieHandler(movie.id)}
              />
            );
          })}
        </section>
      </main>
    );
  }
}

export default Main;
