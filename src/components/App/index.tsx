import * as React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Contact from "../molecules/Contact";

import "./style.scss";

export default function App(): JSX.Element {
  return (
    <div id="App">
      <Contact
        icon={faGithub}
        link="https://github.com//mels065"
      />
    </div>
  );
}
