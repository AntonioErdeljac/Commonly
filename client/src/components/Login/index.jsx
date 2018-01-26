import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { Input } from '../common';
import agent from '../../agent';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeValue(ev, key) {
    const { onChange } = this.props;
    onChange(key, ev);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { email, onSubmit, password } = this.props;
    onSubmit(agent.Auth.login(email, password));
  }

  render() {
    return (
      <div className="container-fluid c-split">
        <div className="row">
          <div className="col-md-7 c-split-header">
            <h6 className="c-split-header-title">Welcome to Commonly</h6>
            <i className="c-split-header-text">Get reminded of everyday tasks</i>
            <br />
            <i className="fa fa-tasks c-split-header-icon" />
          </div>
          <div className="col-md-5 c-split-form p-3">
            <div className="col-8 offset-2">
              <h5 className="text-center c-split-form-header">Login </h5>
              <form onSubmit={this.handleSubmit}>
                <Input
                  className="c-split-form-input"
                  label="Email"
                  name="email"
                  hideLabel
                  onChange={this.changeValue}
                  placeholder="Enter email"
                />
                <Input
                  className="c-split-form-input"
                  label="Password"
                  name="password"
                  hideLabel
                  onChange={this.changeValue}
                  placeholder="Enter password"
                  type="password"
                />
                <button type="submit" className=" my-3 btn btn-primary btn-lg form-control">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.auth,
});

const mapDispatchToProps = dispatch => ({
  onChange: (key, value) =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key, value }),
  onSubmit: payload =>
    dispatch({ type: 'LOGIN', payload }),
});

Login.defaultProps = {
  email: null,
  password: null,
};

Login.propTypes = {
  email: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
