import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moods: ["sad", "happy", "work", "study", "mad", "Sleep"],
    };
  }

  handel (){
    
  }

  render() {
    return (
      <React.Fragment>
        {/* this the header containing the logo and nav bar  */}

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
