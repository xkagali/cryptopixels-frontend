import React from 'react';
import {Row, Col, Button, CardImg, Table} from "react-bootstrap";
import spriteBox from "../../lib/img/test/spriteBox.png"
import avatar from "../../lib/img/test/a07020509060000.png"

function SpriteDetail() {
    return (
        <Row className="justify-content-center">
            <Col className="col-10 col-md-8 col-xl-7">
                <Row>
                    <Col className="col-12 col-md-7">
                        <img src={spriteBox} className="spriteBox" />
                            <div className="spriteOwner">
                                Current Owner:
                                <div className="ownerCard d-flex">
                                    <div className="spriteCtn">
                                        <CardImg src={avatar} />
                                    </div>
                                    <div className="ownerName">
                                        Guo Huo
                                    </div>
                                </div>
                            </div>
                    </Col>
                    <Col className="col-12 col-md-5 spriteDetails">
                        <h2>Wander</h2>
                        <div className="spriteID">#102912</div>
                        <div className="dateListed">18 Jun 2021</div>
                        <div className="spritePrice">39CP
                            <input type="text" name="search" placeholder="CP Price" /></div>
                        <Button variant="primary">Buy</Button>
                        <Button variant="secondary">Sold</Button>
                        <Button variant="tertiary">Unlist</Button>
                    </Col>
                </Row>
            </Col>
            <Col className="col-10 col-md-10 col-xl-9 divider">&nbsp;</Col>
            <Col className="col-10 col-md-8 col-xl-7">
                <Row className="justify-content-center">
                    <Col className="col-12 mb-5">
                        <h3>Sales History</h3>
                        <Table hover>
                            <thead>
                            <tr>
                                <th>Last Sold Date</th>
                                <th>Last Sold Price</th>
                                <th>Buyer</th>
                                <th>Seller</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td data-label="Last Sold Date">23 Apr 2021</td>
                                <td data-label="Last Sold Price">24CP</td>
                                <td data-label="Buyer">Kai Lin</td>
                                <td data-label="Seller">Guo Hao</td>
                            </tr>
                            <tr>
                                <td data-label="Last Sold Date">10 Jan 2021</td>
                                <td data-label="Last Sold Price">10CP</td>
                                <td data-label="Buyer">Ronald</td>
                                <td data-label="Seller">Kai Lin</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default SpriteDetail;