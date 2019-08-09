import * as React from "react";

import { ProjectTypes } from "../../enums";
import Project from "../molecules/Project";

import * as catImage from "../../assets/images/cat.jpeg";

import "./style.scss";

export default function App(): JSX.Element {
  return (
    <div id="App">
      <Project
        name="Game of Life"
        type={ProjectTypes.FULL_STACK}
        image={catImage}
        githubLink="#"
        demoLink="#"
      />
    </div>
  );
}
