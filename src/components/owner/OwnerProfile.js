import React, {useEffect} from 'react';
import {Card, CardImg, Col, Row, Tab, Table, Tabs} from "react-bootstrap";
import avatar from "../../lib/img/test/a07020509060000.png";
import spriteIcon from "../../lib/img/test/a08120004050003.png";
import {NavLink} from "react-router-dom";

function OwnerProfile() {

    function createBox(){
        /*
        *

        set base box to start with 21 grid column and give each cell an id
        detect how many cols is there on each row and how many rows there are
        if the cols/rows changes, give a new id for all cells
        base on the ID of the cell, set the class to the specific wall

        *
        */
        let counter = 1;
        let spritesNumber = 12; //1-99999
        let rows = 4;
        let gridCtn = document.querySelector(".spriteBox")
        //find how many cols in each row
        let cellsPerRow = Math.floor(gridCtn.offsetWidth/55)
        let _counter = counter; //this variable is a counter found in the while loop
        //for every 1, 11, 21, 31 etc. add 2 rows
        while (counter <= spritesNumber){
             if (counter == _counter){
                 rows += 2;
                 _counter += 10;
             }
            counter += 1;
        }
        //create cell and set data-col data-row according to the number of cols
        //so if 2nd row, reset id to 1
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
            console.log(totalRows)

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

    useEffect(()=>{
        createBox()
    },[])

    return (
        <>
            <Row>
                <Col className="col-12">
                    <div className="ownerCard d-flex">
                        <div className="spriteCtn">
                            <CardImg src={avatar} />
                        </div>
                        <div className="ownerName">
                            Guo Hao
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-12 d-flex flex-column">
                    <div className="userSettingsTab d-flex">Settings</div>
                    <Tabs defaultActiveKey="currentPixels" id="tab" className="mb-3">
                        <Tab eventKey="currentPixels" title="Current Pixels" tabClassName="currentPixelsTab">
                            <div className="userSprites">
                                <div className="spriteDetailsImage">
                                    <div className="spriteBox">

                                    </div>
                                    <div className="spriteGrid">
                                        <div className="spriteDetailsCtn d-flex">
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '4'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '6'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '8'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '10'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '12'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '14'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '16'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '18'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridColumnStart: '20'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridRowStart: '5'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <div className="spriteDetailsCtn d-flex" style={{gridRowStart: '5', gridColumnStart: '4'}}>
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="listedPixels" title="Listed Pixels" tabClassName="listedPixelsTab">
                            <Col className="col-6 col-sm-3 col-md-3 col-lg-2">
                                <NavLink to={`/sprites/1`}>
                                    <Card>
                                        <div className="cardCtn d-flex">
                                            <div className="spriteCtn">
                                                <CardImg src={spriteIcon} />
                                            </div>
                                        </div>
                                        <Card.Body className="d-flex justify-content-center align-items-center">
                                            <div className="spriteID">#0192380</div>
                                            <div className="cpPrice">10CP</div>
                                        </Card.Body>
                                    </Card>
                                </NavLink>
                            </Col>
                        </Tab>
                        <Tab eventKey="soldPixels" title="Sold Pixels" tabClassName="soldPixelsTab">
                            <Table hover>
                                <thead>
                                <tr style={{color:'white'}}>
                                    <th>Name</th>
                                    <th>Pixel ID</th>
                                    <th>Sold Date</th>
                                    <th>Sold Price</th>
                                    <th>Buyer</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style={{color:'white'}}>
                                    <td data-label="Name">Tracer</td>
                                    <td data-label="Pixel ID">#102938</td>
                                    <td data-label="Sold Date">01 Dec 2020</td>
                                    <td data-label="Sold Price">10CP</td>
                                    <td data-label="Buyer">Kai Lin</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="achievements" title="Achievements" tabClassName="achievementsTab" disabled>

                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
}

export default OwnerProfile;