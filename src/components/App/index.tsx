import * as React from "react";

import Tab from "../atoms/Tab";

import "./style.scss";

function test(mode: string) {
  console.log(mode);
}

export default function App(): JSX.Element {
  return (
    <div id="App">
      <Tab onClick={test}>
        Hello_World
      </Tab>
    </div>
  );
}
