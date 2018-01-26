import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import agent from '../../agent';
import Navbar from '../Navbar';
import Login from '../Login';
import Home from '../Home';

class Main extends React.Component {
  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }
    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }
  render() {
    const { appLoaded, currentUser } = this.props;
    if (appLoaded) {
      if (currentUser) {
        return (
          <div>
            <Navbar />
            <Home />
          </div>
        );
      }
      return (
        <div>
          <Login />
        </div>
      );
    }
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: 'APP_LOADED', payload, token }),
});

const mapStateToProps = state => ({
  ...state.common,
});

Main.defaultProps = {
  appLoaded: null,
  currentUser: null,
};

Main.propTypes = {
  appLoaded: PropTypes.bool,
  currentUser: PropTypes.shape({}),
  onLoad: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
