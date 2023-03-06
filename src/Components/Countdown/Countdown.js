import React from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: "",
      currentTime: "",
      endTime: "",
    };
  }

  render() {
    return (
      <>
        <div>
          <p
            onClick={() => {
              this.props.close("countdown");
            }}
          >
            ❌
          </p>
          <h1>Countdown Component</h1>
        </div>
      </>
    );
  }
}

export default Countdown;
