import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import StyleBase from "./StyleBase";
import HooksStyle from "./HooksStyle";
import StyledComponent from "./StyledComponent";
import ThemeProviderSample from "./ThemeProviderSample";
import MaterialUiLogin from "./MaterialUiLogin";

export default function App() {
  return (
    <div className="App">
      <h1>Material UIサンプル</h1>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/StyleBase" component={StyleBase} />
          <Route path="/HooksStyle" component={HooksStyle} />
          <Route path="/StyledComponent" component={StyledComponent} />
          <Route path="/ThemeProviderSample" component={ThemeProviderSample} />
          <Route path="/MaterialUiLogin" component={MaterialUiLogin} />
        </div>
      </Router>
    </div>
  );
}
