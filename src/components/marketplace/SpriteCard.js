import React from 'react';
import {Card, CardImg, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import {convertPngToBtoa} from "../../lib/convertPngToBtoa";


function SpriteCard({item}){
    let img
    if(item.itemName){
        img = convertPngToBtoa(item.itemName)
    }
    return (
        <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
            <NavLink to={`/pixel/${item._id}`}>
                    <Card>
                        <div className="cardCtn d-flex">
                            <div className="spriteCtn">
                                <CardImg src={img} />
                            </div>
                        </div>
                        <Card.Body className="d-flex justify-content-center align-items-center">
                            <div className="spriteID">{item.itemName}</div>
                            <div className="cpPrice">{item.priceListed}CP</div>
                        </Card.Body>
                    </Card>
                </NavLink>
        </Col>

    );
}

export default SpriteCard;
