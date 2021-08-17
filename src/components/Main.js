import React from "react";
import "./App.css";
import Movie from './Movie'

class Main extends React.Component {
  render() {
    return (
      <main>
        <Movie title="Mission Impossible" />
        <Movie title="The Matrix" />
        <Movie title="Inception" />
      </main>
    );
  }
}

export default Main;
