import * as React from "react";

import { ProjectTypes } from "../../enums";
import ProjectFilter from "../molecules/ProjectFilter";

import * as catImage from "../../assets/images/cat.jpeg";

import "./style.scss";

export default function App(): JSX.Element {
  return (
    <div id="App">
      <ProjectFilter />
    </div>
  );
}
