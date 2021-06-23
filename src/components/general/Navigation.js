import React from 'react';
import {Container, Row, Nav, Navbar} from "react-bootstrap";
import logo from "../../lib/img/Logo.png";

function Navigation() {
    return (
        <Row>
            <Navbar collapseOnSelect variant={"dark"} expand={"sm"} className={"w-100"}>
                <Container className="px-0">
                    <Navbar.Brand href="/"><img src={logo}/> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"  className={"justify-content-end align-items-center"}>
                        <Nav>
                            <Nav.Link href="#username">Username</Nav.Link> | <Nav.Link href="#points">Points</Nav.Link> | <Nav.Link href="#logout">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    );
}

export default Navigation;