import React, { Component } from "react";
import { Spring } from "react-spring";

class component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>component2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus et accusantium repellat eius libero modi nostrum
                neque, a enim nesciunt perspiciatis aliquid molestiae, dolorum
                perferendis cupiditate tempora ipsam praesentium necessitatibus.
              </p>
              <button style={btn} onClick={this.props.toggle}>
                toggle Component 3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
const c2Style = {
  background: "slateblue",
  padding: "1.2rem",
  color: "white"
};
const btn = {
  color: "white",
  padding: "8px 16px",
  background: "brown",
  outline: "none",
  margin: "5px 0px"
};
export default component2;
