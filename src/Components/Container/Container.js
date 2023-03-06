import React from "react";
import "../style.css";
import Countdown from "../Countdown/Countdown";
import Stopwatch from "../Stopwatch/Stopwatch";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatch: false,
      countdown: false,
    };
  }

  onClickhandler = (event) => {
    this.setState(
      (prevState) => {
        return {
          [event.target.getAttribute("data-name")]:
            !prevState[event.target.getAttribute("data-name")],
        };
      },
      () => {
        // console.log(this.state);
        // console.log("Updated");
      }
    );
  };

  handleClose = (key) => {
    // console.log(key);
    this.setState({
      [key]: false,
    });
  };

  render() {
    return (
      <>
        <div className="main-container">
          <h1>🔥 Timers 🔥</h1>
          <div className="timer-container">
            <div className="stopwatch-container grid-center">
              {this.state.stopwatch ? (
                <Stopwatch close={this.handleClose} />
              ) : (
                <button
                  className="btn"
                  data-name="stopwatch"
                  onClick={this.onClickhandler}
                >
                  Show Stopwatch
                </button>
              )}
            </div>
            <div className="countdown-container grid-center">
              {this.state.countdown ? (
                <Countdown close={this.handleClose} />
              ) : (
                <button
                  className="btn"
                  data-name="countdown"
                  onClick={this.onClickhandler}
                >
                  Show Countdown
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Container;
