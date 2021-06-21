import React from 'react';
import {Card, CardImg, Col} from "react-bootstrap";
import firstIcon from "../../lib/img/test/a0d020208000203.png";

function SpriteCard() {
    return (
        // <NavLink to={`/sprites/${sprite.id}`}>
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
        // </NavLink>
    );
}

export default SpriteCard;