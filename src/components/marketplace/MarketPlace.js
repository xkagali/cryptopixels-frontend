import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import SpriteCard from "./SpriteCard";

function MarketPlace() {
    return (
        <>
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
                <SpriteCard />
            </Row>
        </>
    );
}

export default MarketPlace;