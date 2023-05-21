import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Grid from "./Grid";
import Alignment from "./Alignment";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Alignment />
    {/* <Grid /> */}
  </React.StrictMode>
);
