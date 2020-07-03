import React, { Component } from "react";
import "./style.css";
import Nav from "./nav";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for auth
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);

  }

  handleSuccessfulAuth(data) {
    this.props.history.push("/home");
  }
  render() {
    return (
      
      <Router>
        <div>
          <Nav />
          
          <Route 
            path="/" 
            exact
            render={props => (
                <Home
                  {...props}
                
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          <Route path="/login" render={props => (
                <Login
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )} />
          <Route path="/signup" render={props => (
                <Signup
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleSuccessfulAuth = {this.handleSuccessfulAuth}
                />
              )} />
        </div>
      </Router>
    );
  }
}

export default App;
