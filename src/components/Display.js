import React from "react";
import Card from "./Card";

const Display = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <br />
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary btn-lg"
            onClick={props.onButtonSubmit}
          >
            Get Weather
          </button>
        </div>
        <hr />
      </div>
      <div>
        <Card data={props.data} />
      </div>
    </div>
  );
};

export default Display;
