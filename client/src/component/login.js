import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <input name="username" type="email" placeholder="Email" required />
            <br />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <br />
 
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
