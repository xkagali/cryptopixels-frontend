import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "react-bootstrap"
import Navigation from "./components/general/Navigation";
import MarketPlace from "./components/marketplace/MarketPlace";
import SpriteDetail from "./components/marketplace/SpriteDetail";
import OwnerProfile from "./components/owner/OwnerProfile";
import AdminPage from "./components/general/Admin";

function App() {
    return (
        <BrowserRouter>
            <Container>
                <Navigation />
                <Switch>
                    <Route path="/market" exact>
                        <MarketPlace/>
                    </Route>
                    <Route path="/pixel/:id" exact>
                        <SpriteDetail/>
                    </Route>
                    <Route path="/profile/:id" exact>
                        <OwnerProfile />
                    </Route>
                    <Route path="/admin" exact>
                        <AdminPage/>
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}
export default App;
