import React from 'react';

import Navbar from '../Navbar';
import Login from '../Login';

class Main extends React.Component {
  componentWillMount() {
    console.log('hello world');
  }
  render() {
    return (
      <div className="container">
        <Navbar />
        <Login />
      </div>
    );
  }
}

export default Main;
