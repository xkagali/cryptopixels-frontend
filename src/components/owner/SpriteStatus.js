import React from 'react';

function SpriteStatus({item}) {
    return (
        <>
            <div className="spriteInfo d-flex">
                <div className="boughtDate">
                    Purchased On:<br className="showDesktop" />{item.datePurchased}
                </div>
            </div>
            <div className="spriteInfo d-flex">
                <div className="boughtDate">
                    Listed On:<br className="showDesktop" />{item.dateListed}
                </div>
            </div>
        </>
    );
}

export default SpriteStatus;
