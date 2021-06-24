import React, {useEffect, useState} from 'react';
import {Card, CardImg, Col, Form, Row, Tab, Table, Tabs, Nav, NavItem} from "react-bootstrap";
import {useParams} from "react-router-dom";
import axios from "axios";
import OwnerCard from "./OwnerCard";
import SalesHistory from "../general/SalesHistory";
import SpriteCard from "../marketplace/SpriteCard";
import AllSprites from "./AllSprites";
import Settings from "./Settings";

function OwnerProfile({user}) {
    let {id} = useParams()
    const [userDetails,setUserDetails] = useState([])
    const [userSprites,setUserSprites] = useState([])
    const [userTransactions, setUserTransactions] = useState([])
    const [userListed, setUserListed] = useState([])
    const [userIsOwner, setUserIsOwner] = useState(false)

    useEffect(()=>{
        async function getUserDetails(){
            let {data} = await axios.get(`/api/profile/${id}`)
            setUserDetails(data.userDetails)
            setUserSprites(data.userDetails.items)
            setUserTransactions(data.salesHistory)
            setUserListed(data.userListed)
            console.log()
        }
        getUserDetails()
    },[])

    let loggedInUser = userDetails._id
    let currentPageUser = user._id
    let userMatch = (loggedInUser === currentPageUser)

    return (
        <>
            <Row>
                <Col className="col-12">
                    <OwnerCard item={userDetails} user={user}/>
                </Col>
            </Row>
            <Row>
                <Col className="col-12 d-flex flex-column mb-5">
                    <Tab.Container defaultActiveKey="currentPixels" id="tab" className="mb-3">
                        <Row>
                            <Col className="col-12 tabCtn">
                                <Nav>
                                    <Nav.Item className="currentPixelsTab tab-nav">
                                        <Nav.Link eventKey="currentPixels">Current Pixels</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="listedPixelsTab tab-nav">
                                        <Nav.Link eventKey="listedPixels">Listed Pixels</Nav.Link>
                                    </Nav.Item>
                                    {(userMatch) && <Nav.Item className="soldPixelsTab tab-nav">
                                        <Nav.Link eventKey="soldPixels">Sold Pixels</Nav.Link>
                                    </Nav.Item>}
                                    {(userMatch) && <Nav.Item className="userSettingsTab tab-nav">
                                        <Nav.Link eventKey="settings">Settings</Nav.Link>
                                    </Nav.Item>}
                                </Nav>
                            </Col>
                            <Col className="col-12 my-5">
                                <Tab.Content>
                                    <Tab.Pane eventKey="currentPixels">
                                        <AllSprites userSprites={userSprites}/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="listedPixels">
                                        <Row>
                                            {userListed.map((sprite,index)=>(
                                                <SpriteCard item={sprite} key={index} />
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    {(userMatch) &&<Tab.Pane eventKey="soldPixels">
                                        <SalesHistory userTransactions={userTransactions} userProfile={true} />
                                    </Tab.Pane>}
                                    {(userMatch) &&<Tab.Pane eventKey="settings">
                                        <Settings userSprites={userSprites} id={id} userDetails={userDetails} />
                                    </Tab.Pane>}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </>
    );
}

export default OwnerProfile;
