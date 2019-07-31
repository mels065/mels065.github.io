import * as React from "react";

import Image from "../atoms/Image";

import "./style.scss";

function test(mode: string) {
  console.log(mode);
}

export default function App(): JSX.Element {
  return (
    <div id="App">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg",
        alt="A cat"
      />
    </div>
  );
}
