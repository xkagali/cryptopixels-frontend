import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {Container} from "react-bootstrap"
import Navigation from "./components/general/Navigation";
import MarketPlace from "./components/marketplace/MarketPlace";
import SpriteDetail from "./components/marketplace/SpriteDetail";
import AuthForm from "./components/auth/AuthForm"
import axios from "axios";
import AdminPage from "./components/general/Admin";
import Home from "./components/general/Home";


function App() {
    const [auth, setAuth] = useState({})
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState({})

    useEffect(() =>{
        async function setAdminStatus () {
            try{
                let {data} = await axios.get("/auth/user", {
                    headers: {
                        authorization: `Bearer ${localStorage.token}`
                    }
                })
                setAdmin(data.user.isAdmin)
                }catch(e){
                setAdmin(false)
                }
        }
        setAdminStatus()
    },[]);

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
            } catch (e) {
                setAuth(false)
                setUser(null)
                localStorage.removeItem("token")
            }
        }
        setUserStatus()
    }, [auth])



    // console.log(user.isAdmin)
    // console.log("token")

    return (
        <BrowserRouter>
            <Container>
                <Navigation setAuth={setAuth} setUser={setUser} user={user}/>
                <Switch>
                    {/*<PrivateRoute user={user} setAuth={setAuth} setUser={setUser} path="/auth" exact />*/}
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <PrivateRouter admin={admin} path="/Admin" Component={AdminPage} exact />
                    <Route path="/auth" exact>
                        <AuthForm auth={auth} setAuth={setAuth}/>
                    </Route>
                    <Route path="/market" exact>
                        <MarketPlace/>
                    </Route>
                    <Route path="/pixel/:id" exact>
                        <SpriteDetail setUser={setUser} user={user}/>
                    </Route>
                    <Route path="/profile/:id" exact>
                        <OwnerProfile />
                    </Route>
                    <Route path="/admin" exact>
                        <AdminPage/>
                    </Route>
                    {/*<PrivateRouter isAdmin={isAdmin} path="/admin" Component={AdminPage} exact/>*/}
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

// function PrivateRouter({auth, Component, path, location, ...rest}) {
//     //if auth is true then show Route else redirect to login
//     return (
//         <>
//             {(auth) ? //if auth, allow to view userprofile, else redirect market
//                 <Route path={path} {...rest}>
//                     <Component/>
//                 </Route>
//                 :
//                 <Redirect to={{
//                     pathname: "/market",
//                     state: {from: location}
//                 }}/>
//             }
//         </>
//     )
// }

function PrivateRouter({admin, Component, path, location, ...rest}) {
    //if auth is true then show Route else redirect to login
    return (
        <>
            {(admin) ? //if auth, allow to view userprofile, else redirect market
                <Route path={path} {...rest}>
                    <Component/>
                </Route>
                :
                <Redirect to={{
                    pathname: "/",
                    state: {from: location}
                }}/>
            }
        </>
    )
}

//     function PrivateRouter({auth, Component, path, location, ...rest}) {
//         //if auth is true then show Route else redirect to login
//         return (
//             <>
//                 {(auth) ? //if auth, allow to view userprofile, else redirect market
//                     <Route path={path} {...rest}>
//                         <Component/>
//                     </Route>
//                     :
//                     <Redirect to={{
//                         pathname: "/market",
//                         state: {from: location}
//                     }}/>
//                 }
//             </>
//         )
// }
export default App;
