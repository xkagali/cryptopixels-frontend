import React, {useEffect} from 'react';
import {CardImg} from "react-bootstrap";
import {convertPngToBtoa} from "../../lib/convertPngToBtoa";

function OwnerCard({item}) {
    // console.log(item)
    let img
    let owner
    if (item.currentOwner) {
        img = convertPngToBtoa(item.currentOwner.displayImage)
        owner = item.currentOwner.displayName
    }

    if (item.displayImage || item.displayName) {
        img = convertPngToBtoa(item.displayImage)
        owner = item.displayName
    }

    return (
        <div className="ownerCard d-flex">
            <div className="spriteCtn">
                <CardImg src={img}/>
            </div>
            <div className="ownerName">
                {owner}
            </div>
        </div>
    );
}

export default OwnerCard;
