import React, {useEffect, useState} from 'react';
import {Card, CardImg, Col, Form, Row, Tab, Table, Tabs} from "react-bootstrap";
import {useParams} from "react-router-dom";
import axios from "axios";
import OwnerCard from "./OwnerCard";
import SalesHistory from "../general/SalesHistory";
import SpriteCard from "../marketplace/SpriteCard";
import AllSprites from "./AllSprites";
import Settings from "./Settings";

function OwnerProfile() {
    let {id} = useParams()
    const [userDetails,setUserDetails] = useState([])
    const [userSprites,setUserSprites] = useState([])
    const [userTransactions, setUserTransactions] = useState([])
    const [userListed, setUserListed] = useState([])

    useEffect(()=>{
        async function getUserDetails(){
            let {data} = await axios.get(`/profile/${id}`)
            setUserDetails(data.userDetails)
            setUserSprites(data.userDetails.items)
            setUserTransactions(data.salesHistory)
            setUserListed(data.userListed)
        }
        getUserDetails()
    },[])

    return (
        <>
            <Row>
                <Col className="col-12">
                    <OwnerCard item={userDetails} />
                </Col>
            </Row>
            <Row>
                <Col className="col-12 d-flex flex-column mb-5">
                    <Tabs defaultActiveKey="currentPixels" id="tab" className="mb-3">
                        <Tab eventKey="currentPixels" title="Current Pixels" tabClassName="currentPixelsTab">
                            <AllSprites userSprites={userSprites}/>
                        </Tab>
                        <Tab eventKey="listedPixels" title="Listed Pixels" tabClassName="listedPixelsTab">
                            <Row>
                                {userListed.map((sprite,index)=>(
                                    <SpriteCard item={sprite} key={index} />
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="soldPixels" title="Sold Pixels" tabClassName="soldPixelsTab">
                            <SalesHistory userTransactions={userTransactions} userProfile={true} />
                        </Tab>
                        <Tab eventKey="settings" title="Settings" tabClassName="userSettingsTab">
                            <Settings userSprites={userSprites} id={id} userDetails={userDetails} />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
}

export default OwnerProfile;