import React from "react";
import Route from "./Routes/routeIndex";
import Loader from "./components/plugins/Loader";
import "./App.css";

export default function App () {
    return (
      <React.Fragment>
        <Loader />
        <Route />
      </React.Fragment>
    );
}
