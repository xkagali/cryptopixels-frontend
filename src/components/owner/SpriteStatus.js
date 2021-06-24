import React, {useEffect, useState} from 'react';

function SpriteStatus({item, user}) {
    const [formatDate, setFormatDate] = useState("")
    const [formatPurchaseDate, setformatPurchaseDate] = useState("")

    useEffect(()=>{
        const date = new Date(item.dateListed)
        setFormatDate(date.toLocaleDateString('en-GB', {  year: 'numeric', month: 'short', day: 'numeric' }))

        const purchaseDate = new Date(item.datePurchased)
        setformatPurchaseDate(purchaseDate.toLocaleDateString('en-GB', {  year: 'numeric', month: 'short', day: 'numeric' }))
    },[item])
    return (
        <>
            {item.currentOwner?._id == user?._id ?
            <>
                {item.inMarketplace ?
                <div className="spriteInfo d-flex">
                    <div className="spriteStatus list">
                        You listed this Pixel
                    </div>
                    <div className="boughtDate">
                        Listed On:<br className="showDesktop"/>{formatDate}
                    </div>
                </div>
                :
                <div className="spriteInfo d-flex">
                    <div className="spriteStatus own">
                        You own this Pixel
                    </div>
                    <div className="boughtDate">
                        Purchased On:<br className="showDesktop"/>{formatPurchaseDate}
                    </div>
                </div>
                }
            </>
            :
            <></>
            }
        </>
    );
}


export default SpriteStatus;
