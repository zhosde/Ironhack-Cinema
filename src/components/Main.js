import React from "react";
import "./App.css";
import Movie from "./Movie";
import AddMovie from "./AddMovie";
import SearchBar from "./SearchBar";

class Main extends React.Component {
  // state = {
  //   moviesArr: movies,
  //   searchedMovies: movies,
  // };

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

  sortMovies = (method) => {
    if (method === "title") {
      return this.setState({
        searchedMovies: this.searchedMovies.sort((a, b) =>
          a.title.localeCompare(b.title)
        ),
      });
    } else {
      return this.setState({
        searchedMovies: this.searchedMovies.sort((a, b) => b.rating - a.rating),
      });
    }
  };

  render() {
    return (
      <main>
        {/* <p className='counter'>Currently there are {this.state.searchedMovies.length} movies shown</p> */}
        <SearchBar findTheMovie={this.props.findTheMovie} />
        <button onClick={() => this.sortMovies("title")}>Sort by Title</button>
        <button onClick={() => this.sortMovies("rating")}>
          Sort by Rating
        </button>
        <AddMovie addTheMovie={this.props.addTheMovie} />
        <section className="movie-container">
          {this.props.searchedMovies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                {...movie}
                clickToDelete={this.props.clickToDelete}
              />
            );
          })}
        </section>
      </main>
    );
  }
}

export default Main;
