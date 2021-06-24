import React, {useEffect, useState} from 'react';
import { CardImg } from "react-bootstrap";
import {Link, useParams, NavLink} from "react-router-dom"
import axios from "axios";

function OwnerCard({item, user}) {
    let { currentOwner } = useParams()


    console.log({ currentOwner })
    return (
        <>
            {item.currentOwner?
                <NavLink to={`/profile/${item.currentOwner._id}`} >
                <div className="ownerCard d-flex">
                    <div className="spriteCtn">
                        <CardImg src={item.currentOwner.displayImage?.itemImage} />
                    </div>
                    <div className="ownerName">
                        {item.currentOwner.displayName}
                    </div>
                </div>
                </NavLink>

                :
                <div className="ownerCard d-flex">
                    <div className="spriteCtn">
                        <CardImg src={item.displayImage?.itemImage} />
                    </div>
                    <div className="ownerName">
                        {item.displayName}
                    </div>
                </div>
            }
        </>

    );
}
export default OwnerCard;
