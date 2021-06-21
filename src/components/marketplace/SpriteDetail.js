import React from 'react';
import {Row, Col, Button, CardImg, Table} from "react-bootstrap";
import avatar from "../../lib/img/test/a07020509060000.png"
import spriteIcon from "../../lib/img/test/a08120004050003.png"

function SpriteDetail() {
    return (
        <Row className="justify-content-center">
            <Col className="col-10 col-md-10 col-xl-7">
                <Row>
                    <Col className="col-12 col-xs-10 col-md-8 col-xl-7">
                        <div className="spriteDetailsImage">
                            <div className="spriteBox">
                                <span className="spriteBox-top-left">&nbsp;</span>
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
                                <span className="spriteBox-top-wall-right">&nbsp;</span>
                                <span className="spriteBox-mid-left">&nbsp;</span>
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
                                <span className="spriteBox-mid-right">&nbsp;</span>
                                <span className="spriteBox-btm-left">&nbsp;</span>
                                <span className="spriteBox-btm-mid">&nbsp;</span>
                                <span className="spriteBox-btm-mid">&nbsp;</span>
                                <span className="spriteBox-btm-mid">&nbsp;</span>
                                <span className="spriteBox-btm-mid">&nbsp;</span>
                                <span className="spriteBox-btm-right">&nbsp;</span>
                                <span className="spriteBox-btm-wall-left">&nbsp;</span>
                                <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                                <span className="spriteBox-btm-wall-right">&nbsp;</span>
                            </div>
                            <div className="spriteDetailsCtn d-flex">
                                <div className="spriteCtn">
                                    <CardImg src={spriteIcon} />
                                </div>
                            </div>
                        </div>
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
                        <div className="spriteStats">
                            <div className="spriteInfo d-flex">
                                <div className="spriteStatus own">
                                    You own this Pixel
                                </div>
                                <div className="boughtDate">
                                    Bought Date:<br className="showDesktop" />23 Apr 2021
                                </div>
                            </div>
                            <div className="spriteInfo d-flex">
                                <div className="spriteStatus list">
                                    You listed this Pixel
                                </div>
                                <div className="boughtDate">
                                    Bought Date:<br className="showDesktop" />23 Apr 2021
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-xs-10 col-md-4 col-xl-5 spriteDetails">
                        <h2>Wander</h2>
                        <div className="spriteID">#102912</div>
                        <div className="dateListed">18 Jun 2021</div>
                        <div className="spritePrice">39CP
                            <input type="text" name="search" placeholder="CP Price" /></div>
                        <Button variant="primary">Buy</Button>
                        <Button variant="secondary">Sold</Button>
                        <Button variant="primary">List</Button>
                        <Button variant="tertiary">Unlist</Button>
                    </Col>
                </Row>
            </Col>
            <Col className="col-10 col-md-11 col-xl-9 divider">&nbsp;</Col>
            <Col className="col-10 col-md-10 col-xl-7">
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