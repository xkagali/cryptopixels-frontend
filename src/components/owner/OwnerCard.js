import React from 'react';
import {CardImg} from "react-bootstrap";
import avatar from "../../lib/img/test/a07020509060000.png";

function OwnerCard() {
    return (
        <div className="ownerCard d-flex">
            <div className="spriteCtn">
                <CardImg src={avatar} />
            </div>
            <div className="ownerName">
                Guo Huo
            </div>
        </div>
    );
}

export default OwnerCard;