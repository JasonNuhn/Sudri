import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Footer from './Footer';
// import QuestionsForm from './components/QuestionsForm';
// import QuestionsContainer from './components/QuestionsContainer';
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
        <div className="App-header">
            <ul>
              <a><Link to="/" className="active">Home</Link></a>
              <a><Link to="/Question" className="active">Question</Link></a>
              <a><Link to="/Language" className="active">Language</Link></a>
              <a><Link to="/Userslist" className="active">Users</Link></a>
              <a><Link to="/SearchBar" className="active">Search</Link></a>
              <a><Link to="/Login" className="active">Log In</Link></a>
              <a><Link to="/Signin" className="active">Sign In</Link></a>
            </ul>
            
            
            
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
