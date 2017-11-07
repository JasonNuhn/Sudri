import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Footer from './Footer';
import QuestionsForm from './components/QuestionsForm';
import QuestionsContainer from './components/QuestionsContainer';
import Home from './Home';
import QuestionHome from './QuestionHome';
import Language from './Language';
import UsersList from './UsersList';
import SearchBar from './SearchBar';
import Login from './Login';
import Signin from './Signin';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/Question" component={QuestionHome} />
            <Route path="/Language" component={Language} />
            <Route path="/Userslist" component={UsersList} />
            <Route path="/SearchBar" component={SearchBar} />
            <Route path="/Login" component={Login} />
            <Route path="/Signin" component={Signin} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
