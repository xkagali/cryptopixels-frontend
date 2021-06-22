import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "react-bootstrap"
import Navigation from "./components/general/Navigation";
import MarketPlace from "./components/marketplace/MarketPlace";
import SpriteDetail from "./components/marketplace/SpriteDetail";
import AuthForm from "./components/auth/AuthForm"
import axios from "axios";

function App() {
    const [auth, setAuth] = useState({})
    const [user, setUser] = useState({})

    console.log(user)
    useEffect(() => {
        async function setUserStatus() {
            try {
                let {data} = await axios.get("/auth/user", {
                    headers: {
                        authorization: `Bearer ${localStorage.token}`
                    }
                })
                setAuth(true)
                setUser(data.user)
                console.log(data.user)
            } catch (e) {
                setAuth(false)
                setUser(null)
                localStorage.removeItem("token")
            }
        }
        setUserStatus()
    },[auth])
    // console.log(user)
    // console.log(data)

    return (
        <BrowserRouter>
            <Container>
                <Navigation setAuth={setAuth} setUser={setUser} user={user} />
                <Switch>
                    <Route path="/auth" exact>
                        <AuthForm auth={auth} setAuth={setAuth}/>
                    </Route>
                    <Route path="/market" exact>
                        <MarketPlace/>
                    </Route>
                    <Route path="/pixel/:id" exact>
                        <SpriteDetail/>
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );

    function PrivateRouter({auth, user, Component, path, ...rest}){
        return(
            <>
                { (auth) ?
                    <Route path="/market" >
                        <MarketPlace/>
                    </Route> : <Route path="/auth" >
                        <AuthForm auth={auth} setAuth={setAuth} />
                    </Route>
                }
            </>
        )};

}
export default App;
