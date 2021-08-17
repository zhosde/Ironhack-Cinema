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
  constructor(props){
    super(props)
    this.state = {
      numberOfLikes: 0
    }
  }
    clickBtn = () => {
      this.setState(prevState => {
        return {
          numberOfLikes: prevState.numberOfLikes+1
        }
      })
    }
  render(){
  return (
    <section className='movie'>
      <h5>{this.props.title}</h5>
      <p>Number of Likes: {this.state.numberOfLikes}</p>
      <button onClick={this.clickBtn}>Like it!</button>
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
