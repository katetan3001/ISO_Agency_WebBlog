import React from "react";
import Route from "./Routes/routeIndex";
import Loader from "./components/plugins/Loader";
import ImportScript from "./ImportScript"
import "./App.css";

export default function App () {
  // ImportScript('assets/js/swiper.js');
  // ImportScript('assets/js/countto.js');
  // ImportScript('assets/js/shortcodes.js');
  // ImportScript('assets/js/plugin.js');
    return (
      <React.Fragment>
        <Loader />
        <Route />
      </React.Fragment>
    );
}
