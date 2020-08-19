import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './img/mn_logo.jpg';

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-warning mb-4">
        <a className="navbar-brand" href="hello.html" >
            <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="logo" />
            MakeNote
        </a>
        </nav>
    </div>
  );
};

export default Header;