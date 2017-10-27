import React, { Component } from 'react';
// import logo from './logo.svg';
import './NavBar.css';



const NavBar = (props) => {
    return (
            <div className="Nav">
                    <a href>Question</a>
                    <a href>Language</a>
                    <a href>Users</a>
                    <a href>Search</a>
                    <a href>Log In</a>
                    <a href>Sign In</a>
            </div>
    )
}

export default NavBar;