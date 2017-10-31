import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import QuestionHome from './QuestionHome';
import Footer from './Footer';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />  
        <QuestionHome />
        <Footer />
      </div>
    );
  }
}

export default App;
