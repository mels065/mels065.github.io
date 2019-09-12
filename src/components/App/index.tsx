import * as React from "react";

import BlogPost from "../molecules/BlogPost";

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
      <BlogPost
        title="Test"
        author="Brandon Mellus"
        date={new Date()}
        content={blogContent}
      />
    </div>
  );
}
