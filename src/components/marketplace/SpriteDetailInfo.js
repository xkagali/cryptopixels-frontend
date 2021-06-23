import React, {useState} from 'react';
import {Button, CardImg, Col, Row} from "react-bootstrap";
import OwnerCard from "../owner/OwnerCard";
import SpriteStatus from "../owner/SpriteStatus";
import axios from "axios";
import {useParams} from "react-router-dom";


function SpriteDetailInfo({item, user, setUser}) {
    const {id} = useParams()
    const [newListedPrice, setNewListedPrice] = useState(0)


    function setListedPrice(e){
        setNewListedPrice(e.target.value)
    }

    async function submitListedPrice(e){
        e.preventDefault()
        try{
            function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
            let num = isNumber(newListedPrice)
            if(newListedPrice===item.priceListed || !num || newListedPrice < 1){
                alert('Invalid List Price!')
            } else {
                await axios.put(`/item/changeListPrice/${id}`, {priceListed: newListedPrice})
                alert('Item Successfully listed!')
            }
            window.location.reload()
        }catch(e){
            console.log(e)
        }
    }

    async function submitUnlist(e){
        e.preventDefault()
        try{
            await axios.put(`/item/unlist/${id}`)
            alert('Item Successfully Unlisted!')
            window.location.reload()
        }catch(e){
            console.log(e)
        }
    }

    async function submitBuy(e){
        e.preventDefault()
        try{
            if (item.priceListed > user.points){
                alert('Not Enough Points!')
            } else {
                await axios.put(`/item/buy/${id}`, {
                    transactedPrice:parseInt(item.priceListed),
                    itemId:item._id,
                    buyer:user._id,
                    seller:item.currentOwner._id,
                    dateOfTransaction: new Date(),
                })
                alert('Item Bought!')
                window.location.reload()
            }
        }catch(e){
            console.log(e)
        }
    }

    return (
            <Row>
                <Col className="col-12 col-xs-10 col-md-8 col-xl-7">
                    <div className="spriteDetailsImage">
                        <div className="spriteBox">
                            <span className="spriteBox-top-left">&nbsp;</span>
                            <span className="spriteBox-top-mid">&nbsp;</span>
                            <span className="spriteBox-top-mid">&nbsp;</span>
                            <span className="spriteBox-top-mid">&nbsp;</span>
                            <span className="spriteBox-top-mid">&nbsp;</span>
                            <span className="spriteBox-top-right">&nbsp;</span>
                            <span className="spriteBox-top-wall-left">&nbsp;</span>
                            <span className="spriteBox-top-wall-mid">&nbsp;</span>
                            <span className="spriteBox-top-wall-mid">&nbsp;</span>
                            <span className="spriteBox-top-wall-mid">&nbsp;</span>
                            <span className="spriteBox-top-wall-mid">&nbsp;</span>
                            <span className="spriteBox-top-wall-right">&nbsp;</span>
                            <span className="spriteBox-mid-left">&nbsp;</span>
                            <span className="spriteBox-mid-mid">&nbsp;</span>
                            <span className="spriteBox-mid-mid">&nbsp;</span>
                            <span className="spriteBox-mid-mid">&nbsp;</span>
                            <span className="spriteBox-mid-mid">&nbsp;</span>
                            <span className="spriteBox-mid-right">&nbsp;</span>
                            <span className="spriteBox-mid-left">&nbsp;</span>
                            <span className="spriteBox-mid-mid">&nbsp;</span>
                            <span className="spriteBox-mid-mid">&nbsp;</span>
                            <span className="spriteBox-mid-mid">&nbsp;</span>
                            <span className="spriteBox-mid-mid">&nbsp;</span>
                            <span className="spriteBox-mid-right">&nbsp;</span>
                            <span className="spriteBox-btm-left">&nbsp;</span>
                            <span className="spriteBox-btm-mid">&nbsp;</span>
                            <span className="spriteBox-btm-mid">&nbsp;</span>
                            <span className="spriteBox-btm-mid">&nbsp;</span>
                            <span className="spriteBox-btm-mid">&nbsp;</span>
                            <span className="spriteBox-btm-right">&nbsp;</span>
                            <span className="spriteBox-btm-wall-left">&nbsp;</span>
                            <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                            <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                            <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                            <span className="spriteBox-btm-wall-mid">&nbsp;</span>
                            <span className="spriteBox-btm-wall-right">&nbsp;</span>
                        </div>
                        <div className="spriteDetailsCtn d-flex">
                            <div className="spriteCtn">
                                <CardImg src={item.itemImage} />
                            </div>
                        </div>
                    </div>
                    <div className="spriteOwner">
                        Current Owner:
                        <OwnerCard item={item}/>
                    </div>
                    <div className="spriteStats">
                        <SpriteStatus item={item} user={user}/>
                    </div>
                </Col>
                <Col className="col-12 col-xs-10 col-md-4 col-xl-5 spriteDetails">
                    <h2>{item.itemName}</h2>
                    <div className="spriteID">{item._id}</div>

                    {user?
                        <>
                            {item.inMarketplace?
                                <>
                                    <div className="dateListed">{item.dateListed}</div>
                                    <div className="spritePrice">{item.priceListed}CP</div>
                                </>
                                :
                                <></>
                            }

                            {!(user?._id===item.currentOwner?._id) ?
                                <>
                                    <div className="spriteDetails">{user.points}CP Available</div>
                                    {item.inMarketplace? <Button variant="primary"onClick={submitBuy}>Buy</Button>:<></>}
                                </>
                                :
                                <>
                                    <div><input type="text" name="search" placeholder="CP Price" onChange={setListedPrice}/></div>
                                    {/*<Button variant="secondary" >Sold</Button>*/}
                                    <Button variant="primary" onClick={submitListedPrice}>List</Button>
                                    {item.inMarketplace? <Button variant="tertiary" onClick={submitUnlist}>Unlist</Button>:<></>}
                                </>
                            }
                        </>
                    :
                        <div className="spritePrice">{item.priceListed}CP</div>
                    }
                </Col>
            </Row>
    );
}

export default SpriteDetailInfo;


//if currentuser = owner show list or unlist
//if currentuser != owner show buy

