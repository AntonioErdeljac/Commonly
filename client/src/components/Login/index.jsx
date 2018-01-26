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
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h6>Login </h6>
            <form onSubmit={this.handleSubmit}>
              <Input
                label="Email"
                name="email"
                onChange={this.changeValue}
                placeholder="Enter email"
              />
              <Input
                label="Password"
                name="password"
                onChange={this.changeValue}
                placeholder="Enter password"
                type="password"
              />
              <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </form>
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
  onSubmit: () =>
    dispatch({ type: 'LOGIN' }),
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
