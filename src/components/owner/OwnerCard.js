import React, {useEffect} from 'react';
import {CardImg} from "react-bootstrap";
import avatar from "../../lib/img/test/a07020509060000.png";
import {convertPngToBtoa} from "../../lib/convertPngToBtoa";

function OwnerCard({item}) {

    return (
        <>
            {item.currentOwner?
                <div className="ownerCard d-flex">
                    <div className="spriteCtn">
                        <CardImg src={avatar} />
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
