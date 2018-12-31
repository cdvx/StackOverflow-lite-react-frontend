import React from 'react';
import Questions from "./Questions";
import "../assets/styles.css";

class Home extends React.Component {
  state = {
  };
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron2">
        <Questions />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
