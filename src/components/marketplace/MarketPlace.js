import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import SpriteCard from "./SpriteCard";
import axios from "axios";


function MarketPlace() {
    const [itemList,setItemList]=useState([])
    useEffect(()=>{
        async function getItemList(){
            let {data} = await axios.get("/marketplace/")
            setItemList(data.items)
        }
        getItemList()
    },[])

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
                {itemList.map(item=>(
                    <SpriteCard item={item} key={item._id}/>
                ))}
            </Row>
        </>
    );
}

export default MarketPlace;
