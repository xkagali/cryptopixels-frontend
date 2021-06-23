import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {Container} from "react-bootstrap"
import Navigation from "./components/general/Navigation";
import MarketPlace from "./components/marketplace/MarketPlace";
import SpriteDetail from "./components/marketplace/SpriteDetail";
import AuthForm from "./components/auth/AuthForm"
import axios from "axios";
import OwnerProfile from "./components/owner/OwnerProfile";
import AdminPage from "./components/general/Admin";


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
                console.log(data.user._id)
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
                    {/*<PrivateRoute user={user} setAuth={setAuth} setUser={setUser} path="/auth" exact />*/}
                    <Route path="/auth" exact>
                        <AuthForm auth={auth} setAuth={setAuth}/>
                    </Route>
                    <Route path="/market" exact>
                        <MarketPlace/>
                    </Route>
                    <Route path="/pixel/:id" exact>
                        <SpriteDetail  setUser={setUser} user={user} />
                    </Route>
                    <Route path="/admin" exact>
                        <AdminPage/>
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );

    // function PrivateRouter({auth, user, Component, path, ...rest}){
    //     return(
    //         <>
    //             { (auth) ?
    //                 <Route path={path} >
    //                     <Component {...rest} />
    //                 </Route> : <Redirect to= {{
    //                     // pathname = "/auth", //exclude userprofile page from not logged in
    //                     // state: {from: location}
    //                 }}/>
    //             }
    //         </>
    //     )};

    // function PrivateRoute({auth, Component, path, location, restricted, ...rest}) {
    //     //if auth is true then show Route else redirect to login
    //     return (
    //         <>
    //             {/*{(auth) ?*/}
    //             {/*    <Route path={path} {...rest}>*/}
    //             {/*        <Component />*/}
    //             {/*    </Route> : <Redirect to={{*/}
    //             {/*        pathname: "/auth", //exclude userprofile page from not logged in*/}
    //             {/*        // state: {from: location}*/}
    //             {/*    }}/>*/}
    //             {/*}*/}
    //         </>
    //     )
    // }

}
export default App;
