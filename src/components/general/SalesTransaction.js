import React, {useEffect, useState} from 'react';

function SalesTransaction({item, itemHistory}) {

    const [formatDate, setFormatDate] = useState("")

    useEffect(()=>{
        const date = new Date(item.dateOfTransaction)
        setFormatDate(date.toLocaleDateString('en-GB', {  year: 'numeric', month: 'short', day: 'numeric' }))
    },[item])

    return (
        <>
            {itemHistory ?
                <tr style={{color: 'white'}} key={item._id}>
                    <td data-label="Last Sold Date">{formatDate}</td>
                    <td data-label="Last Sold Price">{item.transactedPrice}CP</td>
                    <td data-label="Buyer">{item.buyer.displayName}</td>
                    <td data-label="Seller">{item.seller.displayName}</td>
                </tr>
                :
                <tr style={{color: 'white'}} key={item._id}>
                    <td data-label="Name">{item.itemId.itemName}</td>
                    <td data-label="Pixel ID">{item.itemId._id}</td>
                    <td data-label="Sold Date">{formatDate}</td>
                    <td data-label="Sold Price">{item.transactedPrice}CP</td>
                    <td data-label="Buyer">{item.buyer.displayName}</td>
                </tr>
            }
        </>
    );
}

export default SalesTransaction;