import * as React from "react";
import * as ReactDOM from "react-dom";

import { TabsProvider } from "./context/ProjectTabs";

import App from "./components/App";

ReactDOM.render(
  (
    <TabsProvider>
      <App />
    </TabsProvider>
  ),
  document.getElementById("root"),
);
