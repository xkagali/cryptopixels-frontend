import React from 'react';

function SpriteStatus({item, user}) {
    console.log(item)
    console.log(user)
    console.log(item.currentOwner?._id)
    // console.log(user._id)
    return (
        <>
            <div className="spriteInfo d-flex">
                <div className="boughtDate">
                    Purchased On:<br className="showDesktop"/>{item.datePurchased}
                </div>
                <div className="boughtDate">
                    Listed On:<br className="showDesktop"/>{item.dateListed}
                </div>
            </div>
            {user && <div className="spriteInfo d-flex">
                {/*{item.currentOwner?._id==user._id ?*/}
                    <div className="spriteStatus own">
                        You own this Pixel
                    </div>
                    :
                    <div className="spriteStatus dontown">
                        You do not own this Pixel
                    </div>
                {/*}*/}
            </div>}
        </>
    );
}


export default SpriteStatus;
