import * as React from "react";

import Tab from "../atoms/Tab";

import "./style.scss";

function test(mode: string) {
  console.log(mode);
}

export default function App(): JSX.Element {
  return (
    <div id="App">
      <Tab onClick={test} currentSelection="Hello_World">
        Hello_World
      </Tab>
      <Tab onClick={test} currentSelection="Hello_World">
        Goodbye_World
      </Tab>
    </div>
  );
}
