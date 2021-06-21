import React from 'react';
import {Row, Col} from "react-bootstrap";
import SalesHistory from "../general/SalesHistory";
import SpriteDetailInfo from "./SpriteDetailInfo";

function SpriteDetail() {
    return (
        <Row className="justify-content-center">
            <Col className="col-10 col-md-10 col-xl-7">
                <SpriteDetailInfo />
            </Col>
            <Col className="col-10 col-md-11 col-xl-9 divider">&nbsp;</Col>
            <Col className="col-10 col-md-10 col-xl-7">
                <SalesHistory />
            </Col>
        </Row>
    );
}

export default SpriteDetail;