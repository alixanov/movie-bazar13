import { Button } from "@mui/material";
import React from "react";
import Play from "@mui/icons-material/PlayCircleOutline";
import line from "../assets/line.svg";
import Carusel from "./Carusel";

const Heads = () => {
  return (
    <div className="heads">
      <div className="left">
        <h3>Find Movies</h3>
        <h1>TV shows and more</h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <Button
          variant="outlined"
          style={{ borderColor: "black", color: "black" }}
        >
          {" "}
          <Play style={{ color: "purple" }} />
          Watch tutorial
        </Button>
      </div>

      <div className="line-svg">
        <img src={line} alt="" />
      </div>

      <div className="slider-swp">
        <Carusel />
      </div>
    </div>
  );
};

export default Heads;
