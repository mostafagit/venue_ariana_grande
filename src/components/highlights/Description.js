import React from "react";
import { Fade } from "react-awesome-reveal";

function Description(props) {
  return (
    <Fade>
      <div className="center_wrapper">
        <h2 style={{textTransform: "capitalize"}}>highlights</h2>
        <div className="highlight_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam
          minus harum fuga, nesciunt, dolor obcaecati doloribus sed ipsa alias
          eum, ducimus et perferendis repellat tempora suscipit culpa quo
          fugiat?   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam
          minus harum fuga, nesciunt, dolor obcaecati doloribus sed ipsa alias
          eum, ducimus et perferendis repellat tempora suscipit culpa quo
          fugiat?
        </div>
      </div>
    </Fade>
  );
}

export default Description;
