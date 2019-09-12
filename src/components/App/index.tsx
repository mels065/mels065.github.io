import * as React from "react";

import DefaultTemplate from "../templates/DefaultTemplate";

import "./style.scss";

const blogContent = [
  "Hello World",
  "I have a special message",
  "Foo bar baz",
  "Thank you",
];

export default function App(): JSX.Element {
  return (
    <div id="App">
      <DefaultTemplate>
        <div>Hello World</div>
      </DefaultTemplate>
    </div>
  );
}
