import React from "react";
import { Spring } from "react-spring";

const Component1 = () => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>component1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus et accusantium repellat eius libero modi nostrum
              neque, a enim nesciunt perspiciatis aliquid molestiae, dolorum
              perferendis cupiditate tempora ipsam praesentium necessitatibus.
            </p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}
            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
};
const counter = {
  background: "black",
  textAlign: "center",
  color: "white",
  width: "100px",
  borderRadius: "50%",
  margin: "1rem auto"
};
const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.4rem"
};
export default Component1;
