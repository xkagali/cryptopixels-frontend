import React from 'react';
import {CardImg} from "react-bootstrap";

function OwnerCard({item}) {
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
