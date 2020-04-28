import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Office } from "./screens/myOffice";
import { MyComponents } from "./screens/myComponents";
import Home from "./screens/home";
//

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/office"} component={Office} />
          <Route path={"/my_components"} component={MyComponents} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
