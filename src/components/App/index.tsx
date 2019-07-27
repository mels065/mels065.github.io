import * as React from "react";

import AnchorLink from "../atoms/AnchorLink";

import "./style.scss";

export default function App(): JSX.Element {
  return (
    <div id="App">
      <AnchorLink href="#">Test</AnchorLink>
    </div>
  );
}
