import React from 'react';
import {CardImg} from "react-bootstrap";

function OwnerCard({item}) {
    return (
        <>
            {item.currentOwner?
                <div className="ownerCard d-flex">
                    <div className="spriteCtn">
                        <CardImg src={item.itemImage} />
                    </div>
                    <div className="ownerName">
                        {item.currentOwner.displayName}
                    </div>
                </div>
            :
             'Loading'
            }
        </>

    );
}

export default OwnerCard;
