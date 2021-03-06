import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
    <h5 className="c-navbar-title">Commonly</h5>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto" />
      <ul className="float-right navbar-nav">
        <li className="nav-item">
          <p className="nav-link" />
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
