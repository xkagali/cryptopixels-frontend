import React, {useEffect} from 'react';
import {CardImg} from "react-bootstrap";
import {convertPngToBtoa} from "../../lib/convertPngToBtoa";

function OwnerCard({item}) {
    console.log(item)
    let img
    let owner
    if (item.currentOwner){
        img = convertPngToBtoa(item.currentOwner.displayImage)
        owner = item.currentOwner.displayName
    }
    
    return (
        <>
            {item.currentOwner?
                <div className="ownerCard d-flex">
                    <div className="spriteCtn">
                        <CardImg src={img} />
                    </div>
                    <div className="ownerName">
                        {owner}
                    </div>
                </div>
            :
             'Loading'
            }
        </>

    );
}

export default OwnerCard;
