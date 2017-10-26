import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Question from './Question';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Surdi</h1>
        </header>
        <p className="App-intro">
          Connect with the World, one sign at a time
        </p>
          <h1>Where you can</h1>
            <ul>Learn</ul>
            <ul>Educate</ul>
            <ul>or Connect</ul>
        <Question />
        <Footer />
      </div>
    );
  }
}

export default App;
