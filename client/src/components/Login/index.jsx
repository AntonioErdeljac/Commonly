import React from 'react';

import { Input } from '../common';

const Login = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h6>Login </h6>
        <form>
          <Input
            label="Email"
            name="email"
            placeholder="Enter email"
          />
          <Input
            label="Password"
            name="password"
            placeholder="Enter password"
            type="password"
          />
          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
