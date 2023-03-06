import React from "react";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false,
      currentTime: 0,
      startTime: 0,
    };
  }

  startStopwatch = () => {
    this.setState({
      switch: true,
      currentTime: this.state.currentTime,
      startTime: Date.now() - this.state.currentTime,
    });

    this.timer = setInterval(() => {
      this.setState({
        currentTime: Date.now() - this.state.startTime,
      });
      console.log(this.state);
    }, 1000);
  };

  stopStopwatch = () => {
    this.setState({
      switch: false,
    });
    clearInterval(this.timer);
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  render() {
    return (
      <>
        <div>
          <p
            className="close-btn"
            onClick={() => {
              this.props.close("stopwatch");
            }}
          >
            ❌
          </p>
          <p onClick={this.stopStopwatch}>Stop Stopwatch</p>
          <h1 onClick={this.startStopwatch}>Stopwatch Component</h1>
          <span className="stopwatch-text">{this.state.currentTime}</span>
        </div>
      </>
    );
  }
}

export default Stopwatch;
