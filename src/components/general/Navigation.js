import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import {Container, Row, Nav, Navbar, Button} from "react-bootstrap";
import logo from "../../lib/img/Logo.png";
import {useHistory, useLocation} from "react-router-dom";
import decode from "jwt-decode";

function Navigation({setAuth, auth, user, setUser}) {
    // const [user, setUser] = useState("");
    // const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    console.log(localStorage.getItem('token'))

    console.log(user)

    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        setAuth(false)
        history.push('/') //redirect user to homepage once logout
        setUser(null) //set user to null) once logout
    }

console.log(user)
    return (
        <Row>
            <Navbar collapseOnSelect variant={"dark"} expand={"sm"} className={"w-100"}>
                <Container className="px-0">
                    <Navbar.Brand href=""><img src={logo}/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"  className={"justify-content-end align-items-center"}>
                        {/*<Nav>*/}
                        {/*    <Nav.Link href="#username">Username</Nav.Link> | <Nav.Link href="#points">Points</Nav.Link> | <Nav.Link href="#logout">Logout</Nav.Link>*/}
                        {/*</Nav>*/}
                        { user ? (
                            <Nav className = "text-white d-inline-flex">
                                <div className= "mr-2 bg-secondary">{user.username}</div>
                                <Button variant="outline-secondary" onClick={logout} >Logout</Button>
                            </Nav>
                        ) : (
                            <Button href="/auth" variant="outline-primary">Sign Up/ Sign In</Button>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    );
}

export default Navigation;
