import React, {useEffect, useState} from 'react';
import {Button, CardImg, Col, Row} from "react-bootstrap";
import spriteIcon from "../../lib/img/test/a08120004050003.png";
import OwnerCard from "../owner/OwnerCard";
import SpriteStatus from "../owner/SpriteStatus";
import {convertPngToBtoa} from "../../lib/convertPngToBtoa";

function SpriteDetailInfo({item}) {

    return (
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
                        <OwnerCard item={item}/>
                    </div>
                    <div className="spriteStats">
                        <SpriteStatus item={item}/>
                    </div>
                </Col>
                <Col className="col-12 col-xs-10 col-md-4 col-xl-5 spriteDetails">
                    <h2>{item.itemName}</h2>
                    <div className="spriteID">{item._id}</div>
                    {item.dateListed?
                        <>
                            <div className="dateListed">{item.dateListed}</div>
                            <div className="spritePrice">{item.priceListed}CP
                                <input type="text" name="search" placeholder="CP Price" /></div>
                            <Button variant="primary">Buy</Button>
                        </>
                        :
                        <></>
                    }
                    <Button variant="secondary">Sold</Button>
                    <Button variant="primary">List</Button>
                    <Button variant="tertiary">Unlist</Button>
                </Col>
            </Row>
    );
}

export default SpriteDetailInfo;
