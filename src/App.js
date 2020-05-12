import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Office } from "./screens/myOffice";

import { Shop } from "./screens/shop";
import { MyComponents } from "./screens/myComponents";
import Home from "./screens/home";
import Project1 from "../src/screens/myComponent/project1";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./redux/reducers";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/office"} component={Office} />
            <Route path={"/my_components"} component={MyComponents} />
            <Route path={"/component1"} component={Project1} />
            <Route path={"/shop"} component={Shop} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
