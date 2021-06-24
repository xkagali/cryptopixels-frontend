import React, {useEffect} from 'react';
import {CardImg, NavLink} from "react-bootstrap";
import {Link, useParams} from "react-router-dom"

function OwnerCard({item}) {
    let { id } = useParams()

    // console.log(item.currentOwner._id)
    // let profileLink = `/profile/${item.currentOwner._id}`
    // console.log(profileLink)
    return (
        <>
            {item.currentOwner?
                <div className="ownerCard d-flex">
                    <div className="spriteCtn">
                        <CardImg src={item.currentOwner.displayImage?.itemImage} />
                    </div>
                    <div className="ownerName">
                        {item.currentOwner.displayName}
                    </div>
                </div>
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
