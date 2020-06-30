import React, { Component } from "react";
class Home extends Component {
  state = {
    moods: ["sad", "happy", "work", "study", "mad", "Sleep"],
  };

  render() {
    return (
      <React.Fragment>

        {/* this the header containing the logo and nav bar  */}

        <header>
          <a class="logo">Moody</a>
          <div class="nav-bar">
            <a>Home</a>
            <a>log in</a>
            <a>sign up</a>
            <a>my Profile</a>
          </div>
        </header>

        <p id="welcoming">How do you feel ?</p>

        {/* i used map to iterate over the elements to put each element in a button and li */}

        <ul>
          {this.state.moods.map((mood) => (
            <li key={mood} className="moods">
              <button id="mood" onClick={this.handel}>
                {mood}
              </button>
            </li>
          ))}
        </ul>

        <button id="cm">Commuinty Moods</button>

        
        {/* the footer part  */}
        <footer>
          <a>about us</a>
          <a>contact us</a>
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
