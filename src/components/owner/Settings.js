import React, {useEffect, useState} from 'react';
import {CardImg, Col, Form, Row} from "react-bootstrap";
import axios from "axios";

function Settings({userSprites, id, userDetails}) {
    const [newDetails,setNewDetails] = useState({})
    const [previewIcon, setPreviewIcon] = useState("")

    function change(e) {
        setNewDetails(currState => ({...currState, ...{[e.target.name]: e.target.value}}))
    }

    async function onSubmit(e){
        try{
            let result = await axios.post(`/profile/${id}`,newDetails)
            console.log(result)
        }catch(e){

        }
    }
    useEffect(()=>{
        let foundAvatar = userSprites.find(element => element._id === newDetails.displayImage)
        if(foundAvatar){
            setPreviewIcon(foundAvatar.itemImage)
        }
    },[newDetails])

    return (
        <>
            <Form onSubmit={onSubmit}>
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-2">
                        <Col className={"col-12 col-md-10 mb-5"}>
                            <div className="text-center"><label>Preview Avatar</label></div>
                            <div className="spriteDetailsImage">
                                <div className="spritePreview d-flex" >
                                    <div className="spriteCtn">
                                        {previewIcon && <CardImg src={previewIcon} />}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Col>
                    <Col className="col-12 col-md-8">
                        <Col className={"col-12 mb-3"}>
                            <label>Choose Avatar</label>
                            <Form.Control as="select" name="displayImage" onChange={change}>
                                <option>Select</option>
                                {userSprites.map((sprite,index)=>(
                                    <option key={index} value={sprite._id}>{sprite.itemName}</option>
                                ))}
                            </Form.Control>
                        </Col>
                        <Col className={"col-12"}>
                            <label>Display Name</label>
                            <input type="text" onChange={change} name="displayName" defaultValue={userDetails.displayName} />
                        </Col>
                        <Col className={"col-12"}>
                            <label>Email</label>
                            <input type="email" name="email" defaultValue={userDetails.email} readOnly />
                        </Col>
                        <Col className={"col-12"}>
                            <label>Password</label>
                            <input type="password" onChange={change} name="password" defaultValue={userDetails.password} />
                        </Col>
                        <Col className={"col-12 mt-4"}>
                            <button type="submit" className="btn-primary">Edit Profile</button>
                        </Col>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default Settings;