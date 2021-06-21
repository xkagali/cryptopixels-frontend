import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/general/Navigation";
import MarketPlace from "./components/marketplace/MarketPlace";
import axios from "axios";

function App() {
  return (
      <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/marketplace" exact>
              <MarketPlace/>
            </Route>
              <Route path="/sprites/:id" exact>
                  {/*<SpriteDetails />*/}
              </Route>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
