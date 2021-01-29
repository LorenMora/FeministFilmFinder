import React, { Component} from 'react';
import './App.css';
import SearchMovies from './components/searchMoviesComponent';



class App extends Component {
  render() {
    return (
      <div className="container">
          <h1 className="title">FEMINIST FILM FINDER</h1>
          <img className='img' src='images/comic895x389.jpg' alt='' />
          <SearchMovies />
      </div>
    );
  }
}

export default App;
 
