import React, { Component } from "react";
import "./App.css";
import SearchMovies from "./components/searchMoviesComponent";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="title">FEMINIST FILM FINDER</h1>
          <img
            className="img"
            src="images/comic.jpg"
            alt="comic strip explaining the bechdel test"
          />
        </header>
        <SearchMovies />
      </div>
    );
  }
}

export default App;
