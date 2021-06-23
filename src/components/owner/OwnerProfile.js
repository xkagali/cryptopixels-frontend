import React from 'react';
import {Card, CardImg, Col, Row, Tab, Table, Tabs} from "react-bootstrap";
import avatar from "../../lib/img/test/a07020509060000.png";
import spriteIcon from "../../lib/img/test/a08120004050003.png";
import {NavLink} from "react-router-dom";

function OwnerProfile() {
    return (
        <>
            <Row>
                <Col className="col-12">
                    <div className="ownerCard d-flex">
                        <div className="spriteCtn">
                            <CardImg src={avatar} />
                        </div>
                        <div className="ownerName">
                            Guo Hao
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-12 d-flex flex-column">
                    <div className="userSettingsTab d-flex">Settings</div>
                    <Tabs defaultActiveKey="currentPixels" id="tab" className="mb-3">
                        <Tab eventKey="currentPixels" title="Current Pixels" tabClassName="currentPixelsTab">
                            <div className="userSprites">
                                <div className="spriteDetailsImage">
                                    <div className="spriteBox">
                                        <span className="spriteBox-top-left">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-mid">&nbsp;</span>
                                        <span className="spriteBox-top-right">&nbsp;</span>
                                        <span className="spriteBox-top-wall-left">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-top-wall-right">&nbsp;</span>
                                        <span className="spriteBox-mid-left">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-right">&nbsp;</span>
                                        <span className="spriteBox-mid-left">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-right">&nbsp;</span>
                                        <span className="spriteBox-mid-left">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-right">&nbsp;</span>
                                        <span className="spriteBox-mid-left">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-right">&nbsp;</span>
                                        <span className="spriteBox-mid-left">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-right">&nbsp;</span>
                                        <span className="spriteBox-mid-left">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-mid">&nbsp;</span>
                                        <span className="spriteBox-mid-right">&nbsp;</span>
                                        <span className="spriteBox-btm-left">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-right">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-left">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                        <span className="spriteBox-btm-wall-right">&nbsp;</span>
                                    </div>
                                    <div className="spriteGrid">
                                        <div className="spriteDetailsCtn d-flex">
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '4'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '6'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '8'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '10'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '12'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '14'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '16'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '18'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '20'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridRowStart: '5'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridRowStart: '5', gridColumnStart: '4'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="listedPixels" title="Listed Pixels" tabClassName="listedPixelsTab">
                            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                                <NavLink to={`/sprites/1`}>
                                    <Card>
                                        <div className="cardCtn d-flex">
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <Card.Body className="d-flex justify-content-center align-items-center">
                                            <div className="spriteID">#0192380</div>
                                            <div className="cpPrice">10CP</div>
                                        </Card.Body>
                                    </Card>
                                </NavLink>
                            </Col>
                        </Tab>
                        <Tab eventKey="soldPixels" title="Sold Pixels" tabClassName="soldPixelsTab">
                            <Table hover>
                                <thead>
                                <tr style={{color:'white'}}>
                                    <th>Name</th>
                                    <th>Pixel ID</th>
                                    <th>Sold Date</th>
                                    <th>Sold Price</th>
                                    <th>Buyer</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr style={{color:'white'}}>
                                        <td data-label="Name">Tracer</td>
                                        <td data-label="Pixel ID">#102938</td>
                                        <td data-label="Sold Date">01 Dec 2020</td>
                                        <td data-label="Sold Price">10CP</td>
                                        <td data-label="Buyer">Kai Lin</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="achievements" title="Achievements" tabClassName="achievementsTab" disabled>

                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
}

export default OwnerProfile;