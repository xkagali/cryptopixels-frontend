import React from 'react';

function SpriteStatus({item, user}) {
    return (

        <>
            {/*{! (user._id === item.currentOwner?._id) ?*/}
                <div className="spriteInfo d-flex">
                    <div className="spriteStatus own">
                        You own this Pixel
                    </div>
                    <div className="boughtDate">
                        Purchased On:<br className="showDesktop"/>{item.datePurchased}
                    </div>
                </div>
                {/*:*/}
                <div className="spriteInfo d-flex">
                    <div className="spriteStatus list">
                        You listed this Pixel
                    </div>
                    <div className="boughtDate">
                        Listed On:<br className="showDesktop"/>{item.dateListed}
                    </div>
                </div>
            {/*}*/}
        </>

    );
}


export default SpriteStatus;
