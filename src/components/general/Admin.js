import React, { useState } from 'react'
import axios from "axios";
import {Row, Col} from "react-bootstrap";

const AdminPage = () => {
    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const [ itemName, setItemName ] = useState("");
    const [ itemDescription, setItemDescription ] = useState("");
    const [ itemPrice, setItemPrice ] = useState("");

    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "cryptopixels")
        data.append("cloud_name","dszsbox75")

        fetch("https://api.cloudinary.com/v1_1/dszsbox75/image/upload",{
            method:"post",
            body: data})
            .then(resp => resp.json())
            .then(data => {
                setUrl(data.url)
                console.log(data)
            })
            .catch(err => console.log(err))
    }


    function changeItemName(e){
        setItemName(e.target.value)
    }
    function changeItemDescription(e){
        setItemDescription(e.target.value)
    }
    function changeItemPrice(e){
        setItemPrice(e.target.value)
    }

    async function saveItem(e){
        e.preventDefault()
        try{
            await axios.put(`/item/create`, {
                itemName:itemName,
                itemDescription:itemDescription,
                itemImage:url,
                currentOwner:'60d29dea2a6254cf57e930b6',
                previousOwner: [],
                itemPrice:itemPrice,
                inMarketplace: true,
                dateListed: new Date(),
                datePurchased:'',
                priceListed: itemPrice,
            })
            alert('Item Saved!')
        }catch(e){
            console.log(e)
        }
    }


    return (
        <Row className="justify-content-center">
            <Col className="col-12 text-center"> <h5>Pixels saved will automatically be uploaded on the Marketplace</h5></Col>
            <Col className="col-12 col-md-8">
                <Row>
                    <Col className="col-12 adminForm">
                        <Row className="align-items-center">
                            <Col className="col-12 col-md-3 text-right">
                                <label>Pixel Name</label></Col>
                            <Col className="col-12 col-md-9">
                            <input type="text" name="itemName" placeholder="Pixel Name" onChange={changeItemName}/>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col className="col-12 col-md-3 text-right">
                                <label>Pixel Description</label></Col>
                            <Col className="col-12 col-md-9">
                            <input type="text" name="itemDescription" placeholder="Pixel Description" onChange={changeItemDescription}/>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col className="col-12 col-md-3 text-right">
                                <label>Pixel Price</label></Col>
                            <Col className="col-12 col-md-9">
                            <input type="text" name="itemPrice" placeholder="Pixel Price" onChange={changeItemPrice}/>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col className="col-12 col-md-3 text-right">
                                <label>Pixel Image</label></Col>
                            <Col className="col-12 col-md-9">
                            <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
                            <button onClick={uploadImage}  className="btn-primary">Upload Image</button>
                            </Col>
                            <Col className="col-12 my-5 text-center">
                                <h6>Uploaded image will be displayed here</h6>
                                <img src={url}/>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col className="col-12">
                            <button onClick={saveItem} className="btn-primary">Save Pixel</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AdminPage;
