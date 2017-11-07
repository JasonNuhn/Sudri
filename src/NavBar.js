import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './NavBar.css';

import Home from './Home';
import QuestionHome from './QuestionHome';
import Language from './Language';
import UsersList from './UsersList';
import SearchBar from './SearchBar';
import Login from './Login';
import Signin from './Signin';


const NavBar = (props) => {
    return (
        <Router>
            <div className="Nav">
                <Route exact path="/" component={Home} />
                <Route path="/Question" component={QuestionHome} />
                <Route path="/Language" component={Language} />
                <Route path="/Userslist" component={UsersList} />
                <Route path="/SearchBar" component={SearchBar} />
                <Route path="/Login" component={Login} />
                <Route path="/Signin" component={Signin} />
            </div>
        </Router>
    )
}

export default NavBar;