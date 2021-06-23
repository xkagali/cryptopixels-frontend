import React from 'react';
import {Card, CardImg, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom"


function SpriteCard({item}){
    return (
        <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
g            <NavLink to={`/pixel/${item._id}`}>
                    <Card>
                        <div className="cardCtn d-flex">
                            <div className="spriteCtn">
                                <CardImg src={item.itemImage} />
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
