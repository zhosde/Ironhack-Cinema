import React from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends React.Component {
  render(){
  return <h1>Welcome to Ironhack Cinema</h1>
}
}

class Main extends React.Component {
  render(){
  return (
    <main>
      <Movie title="Mission Impossible" />
      <Movie title="The Matrix" />
      <Movie title="Inception" />
    </main>
  );
  }
}

class Movie extends React.Component {
  render(){
  return (
    <section className='movie'>
      <h5>{this.props.title}</h5>
    </section>
  )
  }
}

class Footer extends React.Component {
  render(){
  return <footer>By Team Ironhack</footer>
}
}

function App() {
  return (
    <div className="App">
    <Header />
    <Main />
    <Footer />
    </div>
  );
}

export default App;
