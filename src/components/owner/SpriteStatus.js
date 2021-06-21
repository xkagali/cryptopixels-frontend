import React from 'react';

function SpriteStatus() {
    return (
        <>
            <div className="spriteInfo d-flex">
                <div className="spriteStatus own">
                    You own this Pixel
                </div>
                <div className="boughtDate">
                    Bought Date:<br className="showDesktop" />23 Apr 2021
                </div>
            </div>
            <div className="spriteInfo d-flex">
                <div className="spriteStatus list">
                    You listed this Pixel
                </div>
                <div className="boughtDate">
                    Bought Date:<br className="showDesktop" />23 Apr 2021
                </div>
            </div>
        </>
    );
}

export default SpriteStatus;