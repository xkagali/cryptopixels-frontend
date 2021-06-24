import React, { useState } from 'react'
import axios from "axios";

const AdminPage = () => {
    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const [ itemName, setItemName ] = useState("");
    const [ itemDescription, setItemDescription ] = useState("");
    const [ itemPrice, setItemPrice ] = useState("");

    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "cryptopixels")
        data.append("cloud_name","dszsbox75")

        fetch("https://api.cloudinary.com/v1_1/dszsbox75/image/upload",{
            method:"post",
            body: data})
            .then(resp => resp.json())
            .then(data => {
                setUrl(data.url)
                console.log(data)
            })
            .catch(err => console.log(err))
    }


    function changeItemName(e){
        setItemName(e.target.value)
    }
    function changeItemDescription(e){
        setItemDescription(e.target.value)
    }
    function changeItemPrice(e){
        setItemPrice(e.target.value)
    }

    async function saveItem(e){
        e.preventDefault()
        try{
            await axios.put(`/item/create`, {
                itemName:itemName,
                itemDescription:itemDescription,
                itemImage:url,
                currentOwner:'60d29dea2a6254cf57e930b6',
                previousOwner: [],
                itemPrice:itemPrice,
                inMarketplace: true,
                dateListed: new Date(),
                datePurchased:'',
                priceListed: itemPrice,
            })
            alert('Item Saved!')
        }catch(e){
            console.log(e)
        }
    }


    return (
        <div>
            <h2>Pixels saved will automatically be uploaded on the Marketplace</h2>
            <div>
                <input type="text" name="itemName" placeholder="Item Name" onChange={changeItemName}/>
                <input type="text" name="itemDescription" placeholder="Item Description" onChange={changeItemDescription}/>
                <input type="text" name="itemPrice" placeholder="Item Price" onChange={changeItemPrice}/>
                <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
                <button onClick={uploadImage}>Upload Image</button>
                <button onClick={saveItem}>Save Pixel</button>
            </div>
            <div>
                <h1>Uploaded image will be displayed here</h1>
                <img src={url}/>
            </div>
        </div>
    )
}

export default AdminPage;
