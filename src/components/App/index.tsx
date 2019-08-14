import * as React from "react";

import { faJs } from "@fortawesome/free-brands-svg-icons";

import { ProjectTypes } from "../../enums";
import Skill from "../molecules/Skill";

import * as catImage from "../../assets/images/cat.jpeg";

import "./style.scss";

export default function App(): JSX.Element {
  return (
    <div id="App">
      <Skill
        name="JavaScript"
        icon={faJs}
      />
    </div>
  );
}
