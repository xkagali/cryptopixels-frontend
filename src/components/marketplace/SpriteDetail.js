import React, {useEffect, useState} from 'react';
import {Row, Col} from "react-bootstrap";
import SalesHistory from "../general/SalesHistory";
import SpriteDetailInfo from "./SpriteDetailInfo";
import {useParams} from "react-router-dom";
import axios from "axios";

function SpriteDetail() {
    const {id} = useParams()
    const [item,setItem]=useState([])
    const [itemHistory,setItemHistory]=useState([])

    useEffect(()=>{
        async function getItem(){
            let {data} = await axios.get(`/item/${id}`)
            setItem(data.item)
            setItemHistory(data.itemHistory)
        }
        getItem()
    },[])

    return (
        <Row className="justify-content-center">
            <Col className="col-10 col-md-10 col-xl-7">
                <SpriteDetailInfo item={item}/>
            </Col>
            <Col className="col-10 col-md-11 col-xl-9 divider">&nbsp;</Col>
            <Col className="col-10 col-md-10 col-xl-7">
                <SalesHistory itemHistory={itemHistory}/>
            </Col>
        </Row>
    );
}


export default SpriteDetail;
