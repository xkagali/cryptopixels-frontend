import React from "react";
import logo from "./lib/img/Logo.png"
import firstIcon from "./lib/img/test/a0d020208000203.png"
import secondIcon from "./lib/img/test/a011b0600060004.png"
import thirdIcon from "./lib/img/test/a07170407020204.png"
import {Navbar, Nav, Container, Row, Col, Card, CardImg, Form} from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
          <Navbar collapseOnSelect variant={"dark"} expand={"sm"} className={"w-100"}>
              <Container className="px-0">
                  <Navbar.Brand href=""><img src={logo}/> </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav"  className={"justify-content-end align-items-center"}>
                      <Nav>
                          <Nav.Link href="#username">Username</Nav.Link> | <Nav.Link href="#points">Points</Nav.Link> | <Nav.Link href="#logout">Logout</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </Row>
        <Row className="mb-3">
            <Col className={"col-12"}>
                <input type="text" name="search" placeholder="Sprite Name" />
            </Col>
        </Row>
        <Row className="mb-3">
            <Col className={"col-12"}>
                <Form>
                    <Form.Group controlId="exampleForm" className="d-flex justify-content-end align-items-center">
                        <Form.Label className="mb-0 mr-3">Sort:</Form.Label>
                        <Form.Control as="select">
                            <option>Price High to Low</option>
                            <option>Price Low to High</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                <Card>
                    <div className="cardCtn d-flex">
                        <div className="spriteCtn">
                            <CardImg src={firstIcon} />
                        </div>
                    </div>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                        <div className="spriteID">#102912</div>
                        <div className="cpPrice">3CP</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                <Card>
                    <div className="cardCtn d-flex">
                        <div className="spriteCtn">
                            <CardImg src={secondIcon} />
                        </div>
                    </div>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                        <div className="spriteID">#239808</div>
                        <div className="cpPrice">2CP</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                <Card>
                    <div className="cardCtn d-flex">
                        <div className="spriteCtn">
                            <CardImg src={thirdIcon} />
                        </div>
                    </div>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                        <div className="spriteID">#102912</div>
                        <div className="cpPrice">3CP</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                <Card>
                    <div className="cardCtn d-flex">
                        <div className="spriteCtn">
                            <CardImg src={firstIcon} />
                        </div>
                    </div>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                        <div className="spriteID">#102912</div>
                        <div className="cpPrice">3CP</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                <Card>
                    <div className="cardCtn d-flex">
                        <div className="spriteCtn">
                            <CardImg src={firstIcon} />
                        </div>
                    </div>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                        <div className="spriteID">#102912</div>
                        <div className="cpPrice">3CP</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                <Card>
                    <div className="cardCtn d-flex">
                        <div className="spriteCtn">
                            <CardImg src={firstIcon} />
                        </div>
                    </div>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                        <div className="spriteID">#102912</div>
                        <div className="cpPrice">3CP</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                <Card>
                    <div className="cardCtn d-flex">
                        <div className="spriteCtn">
                            <CardImg src={firstIcon} />
                        </div>
                    </div>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                        <div className="spriteID">#102912</div>
                        <div className="cpPrice">3CP</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                <Card>
                    <div className="cardCtn d-flex">
                        <div className="spriteCtn">
                            <CardImg src={firstIcon} />
                        </div>
                    </div>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                        <div className="spriteID">#102912</div>
                        <div className="cpPrice">3CP</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                <Card>
                    <div className="cardCtn d-flex">
                        <div className="spriteCtn">
                            <CardImg src={firstIcon} />
                        </div>
                    </div>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                        <div className="spriteID">#102912</div>
                        <div className="cpPrice">3CP</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                <Card>
                    <div className="cardCtn d-flex">
                        <div className="spriteCtn">
                            <CardImg src={firstIcon} />
                        </div>
                    </div>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                        <div className="spriteID">#102912</div>
                        <div className="cpPrice">3CP</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                <Card>
                    <div className="cardCtn d-flex">
                        <div className="spriteCtn">
                            <CardImg src={firstIcon} />
                        </div>
                    </div>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                        <div className="spriteID">#102912</div>
                        <div className="cpPrice">3CP</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                <Card>
                    <div className="cardCtn d-flex">
                        <div className="spriteCtn">
                            <CardImg src={firstIcon} />
                        </div>
                    </div>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                        <div className="spriteID">#102912</div>
                        <div className="cpPrice">3CP</div>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>
  );
}

export default App;
