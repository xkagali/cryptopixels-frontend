import React from 'react';
import {Container, Row, Nav, Navbar, Button, NavDropdown, CardImg} from "react-bootstrap";
import logo from "../../lib/img/Logo.png";
import {NavLink, useHistory} from "react-router-dom";

function Navigation({setAuth, user, setUser}) {
    const history = useHistory()

    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        setAuth(false)
        history.push('/') //redirect user to homepage once logout
        setUser(null) //set user to null) once logout
    }

    return (
        <Row>
            <Navbar collapseOnSelect variant={"dark"} expand={"sm"} className={"w-100"}>
                <Container className="px-0">
                    <Navbar.Brand href="/"><img src={logo}/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end align-items-center">
                        <NavLink to={'/market'} className='navbar-text'>Marketplace</NavLink>
                        { user ? (
                            <>
                                <NavDropdown title={user.displayName} id="basic-nav-dropdown" className='navbar-text'>
                                    <NavDropdown.Item href={`/profile/${user._id}`}>Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                <div className="spriteDetailsCtn d-flex">
                                    <div className="spriteCtn">
                                        <CardImg src={user.displayImage?.itemImage} />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <NavLink to={"/auth"} className='navbar-text'>Register / Login</NavLink>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    );
}

export default Navigation;
