import React, {useEffect, useState} from 'react';
import {Card, CardImg, Col, Form, Row, Tab, Table, Tabs} from "react-bootstrap";
import {useParams} from "react-router-dom";
import axios from "axios";
import OwnerCard from "./OwnerCard";
import SalesHistory from "../general/SalesHistory";
import SpriteCard from "../marketplace/SpriteCard";

function OwnerProfile() {
    let {id} = useParams()
    const [userDetails,setUserDetails] = useState([])
    const [userSprites,setUserSprites] = useState([])
    const [updateSprites,setUpdateSprites] = useState([])
    const [userTransactions, setUserTransactions] = useState([])
    const [userListed, setUserListed] = useState([])

    const [newDetails,setNewDetails] = useState({})
    const [previewIcon, setPreviewIcon] = useState("")

    function change(e) {
        setNewDetails(currState => ({...currState, ...{[e.target.name]: e.target.value}}))
    }

    async function onSubmit(e){
        e.preventDefault()
        try{
            let result = await axios.post(`/profile/${id}`,newDetails)
            console.log(result)
        }catch(e){

        }
    }

    console.log(newDetails)
    console.log(userSprites)
    useEffect(()=>{
        let foundAvatar = userSprites.find(element => element._id === newDetails.displayImage)
        if(foundAvatar){
            setPreviewIcon(foundAvatar.itemImage)
        }
    },[newDetails])

    useEffect(()=>{
        async function getUserDetails(){
            let {data} = await axios.get(`/profile/${id}`)
            setUserDetails(data.userDetails)
            setUserSprites(data.userDetails.items)
            setUserTransactions(data.salesHistory)
            setUserListed(data.userListed)
        }
        getUserDetails()
    },[])
    useEffect(()=>{
        if(userSprites.length){
            createBox()
        }
        setSpritesOnGrid()
    },[userSprites])

    function setSpritesOnGrid(){

        let spriteObj = {}
        let spriteArr = []
        let counter = 1
        let spriteGridCtnWidth = document.querySelector(".spriteGrid").offsetWidth
        let gridCellsPerRow = Math.floor(spriteGridCtnWidth/55)

        let totalFit = Math.floor(gridCellsPerRow/2)

        // 21 cols
        // counter = 0
        //
        // each sprite takes 2 cols, so if there's 7 sprites, it takes up 14, left with 7 cols
        //
        // 21/2 = 10.5 (round down to 10) - means 1 row can fit 10

        if(userSprites.length <= totalFit){
            // if total sprites does not exceed this, set col: (counter+1)*2
            userSprites.forEach((sprite,index)=>{
                spriteObj = {
                    ...sprite,
                    col: counter*2,
                    row: 0
                }
                counter += 1
                spriteArr.push(spriteObj)
            })
            setUpdateSprites(spriteArr)
        }else if(userSprites.length > totalFit){
            // if total sprites exceed this amount
            // eg: total fit row is 5 and total sprites is 15
            let row = 3;
            let rowcounter = totalFit
            let spritecounter = 0
            userSprites.forEach(sprite=> {
                // if spritecounter is the same as row counter, add 2 to rows
                if(spritecounter === rowcounter){
                    counter = 1
                    row += 2;

                    spriteObj = {
                        ...sprite,
                        col: counter*2,
                        row: row
                    }
                    rowcounter += totalFit
                }else{
                    spriteObj = {
                        ...sprite,
                        col: counter*2,
                        row: row
                    }
                }
                spritecounter += 1
                counter += 1
                spriteArr.push(spriteObj)
            })

            setUpdateSprites(spriteArr)
        }
        window.addEventListener('resize',function(e){
            spriteGridCtnWidth = document.querySelector(".spriteGrid").offsetWidth
            gridCellsPerRow = Math.floor(spriteGridCtnWidth/55)
            totalFit = Math.floor(gridCellsPerRow/2)
            spriteArr = []
            spriteObj = {}
            counter = 1

            if(userSprites.length <= totalFit){
                // if total sprites does not exceed this, set col: (counter+1)*2
                userSprites.forEach((sprite,index)=>{
                    spriteObj = {
                        ...sprite,
                        col: counter*2,
                        row: 0
                    }
                    counter += 1
                    spriteArr.push(spriteObj)
                })
                setUpdateSprites(spriteArr)
            }else if(userSprites.length > totalFit){
                console.log("total sprites " + userSprites.length)
                // if total sprites exceed this amount
                // eg: total fit row is 5 and total sprites is 15
                let row = 3;
                let rowcounter = totalFit
                let spritecounter = 0
                userSprites.forEach(sprite=> {
                    // if spritecounter is the same as row counter, add 2 to rows
                    if(spritecounter === rowcounter){
                        counter = 1
                        row += 2;

                        spriteObj = {
                            ...sprite,
                            col: counter*2,
                            row: row
                        }
                        rowcounter += totalFit
                    }else{
                        spriteObj = {
                            ...sprite,
                            col: counter*2,
                            row: row
                        }
                    }
                    spritecounter += 1
                    counter += 1
                    spriteArr.push(spriteObj)
                })

                setUpdateSprites(spriteArr)
            }
        })
    }

    function createBox(){

        //create box grid
        let spritesNumber = userSprites.length;
        let rows;
        let gridCtn = document.querySelector(".spriteBox")
        //find how many cols in each row
        let cellsPerRow = Math.floor(gridCtn.offsetWidth/55)
        let totalFit = Math.floor(cellsPerRow/2)

        //if total sprites is 15 and total fit is 5, take total sprites divide by total fit to get number of rows
        let totalRows = Math.floor(spritesNumber/totalFit)
        rows = 6+(totalRows*2)

        //create cell and set data-col data-row according to the number of cols
        for (let j = 1; j <= rows; j++){
            for (let i = 1; i <= cellsPerRow; i++){
                let cell = document.createElement("span")
                cell.setAttribute("data-col", i)
                cell.setAttribute("data-row", j)
                gridCtn.append(cell)

                if(cell.dataset.col === "1" && cell.dataset.row === "1"){
                    cell.className = "spriteBox-top-left"
                }else if(cell.dataset.col == cellsPerRow && cell.dataset.row === "1"){
                    cell.className = "spriteBox-top-right"
                }else if(cell.dataset.row === "1") {
                    cell.className = "spriteBox-top-mid"
                }else if (cell.dataset.col === "1" && cell.dataset.row == rows){
                    cell.className = "spriteBox-btm-wall-left"
                }else if (cell.dataset.col == cellsPerRow && cell.dataset.row == rows){
                    cell.className = "spriteBox-btm-wall-right"
                }else if (cell.dataset.row == rows){
                    cell.className = "spriteBox-btm-wall-mid"
                }else if (cell.dataset.col === "1" && cell.dataset.row == rows-1){
                    cell.className = "spriteBox-btm-left"
                }else if (cell.dataset.col == cellsPerRow && cell.dataset.row == rows-1){
                    cell.className = "spriteBox-btm-right"
                }else if (cell.dataset.row == rows-1){
                    cell.className = "spriteBox-btm-mid"
                }else if(cell.dataset.col === "1"){
                    cell.className = "spriteBox-mid-left"
                }else if(cell.dataset.col == cellsPerRow){
                    cell.className = "spriteBox-mid-right"
                }else{
                    cell.className = "spriteBox-mid-mid"
                }
            }
        }

        window.addEventListener('resize',function(e){
            let gridCtnWidth = document.querySelector(".spriteBox").offsetWidth
            cellsPerRow = Math.floor(gridCtnWidth/55)
            let totalRows = getComputedStyle(gridCtn).getPropertyValue("grid-template-rows").split(" ").length

            gridCtn.innerHTML="";

            for (let j = 1; j <= totalRows; j++){
                for (let i = 1; i <= cellsPerRow; i++){
                    let cell = document.createElement("span")
                    cell.setAttribute("data-col", i)
                    cell.setAttribute("data-row", j)
                    gridCtn.append(cell)

                    if(cell.dataset.col === "1" && cell.dataset.row === "1"){
                        cell.className = "spriteBox-top-left"
                    }else if(cell.dataset.col == cellsPerRow && cell.dataset.row === "1"){
                        cell.className = "spriteBox-top-right"
                    }else if(cell.dataset.row === "1") {
                        cell.className = "spriteBox-top-mid"
                    }else if (cell.dataset.col === "1" && cell.dataset.row == totalRows){
                        cell.className = "spriteBox-btm-wall-left"
                    }else if (cell.dataset.col == cellsPerRow && cell.dataset.row == totalRows){
                        cell.className = "spriteBox-btm-wall-right"
                    }else if (cell.dataset.row == totalRows){
                        cell.className = "spriteBox-btm-wall-mid"
                    }else if (cell.dataset.col === "1" && cell.dataset.row == totalRows-1){
                        cell.className = "spriteBox-btm-left"
                    }else if (cell.dataset.col == cellsPerRow && cell.dataset.row == totalRows-1){
                        cell.className = "spriteBox-btm-right"
                    }else if (cell.dataset.row == totalRows-1){
                        cell.className = "spriteBox-btm-mid"
                    }else if(cell.dataset.col === "1"){
                        cell.className = "spriteBox-mid-left"
                    }else if(cell.dataset.col == cellsPerRow){
                        cell.className = "spriteBox-mid-right"
                    }else{
                        cell.className = "spriteBox-mid-mid"
                    }
                }
            }
        })
    }

    return (
        <>
            <Row>
                <Col className="col-12">
                    {/*<OwnerCard item={userDetails} />*/}
                </Col>
            </Row>
            <Row>
                <Col className="col-12 d-flex flex-column">
                    <Tabs defaultActiveKey="currentPixels" id="tab" className="mb-3">
                        <Tab eventKey="currentPixels" title="Current Pixels" tabClassName="currentPixelsTab">
                            <div className="userSprites">
                                <div className="spriteDetailsImage">
                                    <div className="spriteBox"></div>
                                    <div className="spriteGrid">
                                        {updateSprites.map((sprite)=>(
                                            <div className="spriteDetailsCtn d-flex" key={sprite._id} style={{gridColumnStart: sprite.col, gridRowStart: sprite.row}}>
                                                <div className="spriteCtn">
                                                    <CardImg src={sprite.itemImage} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="listedPixels" title="Listed Pixels" tabClassName="listedPixelsTab">
                            <Row>
                                {userListed.map(sprite=>(
                                    <SpriteCard item={sprite} key={sprite._id} />
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="soldPixels" title="Sold Pixels" tabClassName="soldPixelsTab">
                            <SalesHistory userTransactions={userTransactions} userProfile={true} />
                        </Tab>
                        <Tab eventKey="achievements" title="Achievements" tabClassName="achievementsTab" disabled>

                        </Tab>
                        <Tab eventKey="settings" title="Settings" tabClassName="userSettingsTab">
                            {previewIcon && <div><img src={previewIcon} /></div>}
                            <Form onSubmit={onSubmit}>
                                <label>Display Name
                                <input type="text" onChange={change} name="displayName" defaultValue={userDetails.displayName} />
                                </label>
                                <label>Email
                                    <input type="email" name="email" defaultValue={userDetails.email} readOnly />
                                </label>
                                <label>Password
                                    <input type="password" onChange={change} name="password" defaultValue={userDetails.password} />
                                </label>
                                <label>Avatar
                                    <select name="displayImage" onChange={change}>
                                    {userSprites.map(sprite=>(
                                        <option key={sprite._id} value={sprite._id}>{sprite.itemName}</option>
                                    ))}
                                    </select>
                                </label>
                                <button type="submit">Edit Profile</button>
                            </Form>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
}

export default OwnerProfile;