import React, {useEffect, useState} from 'react';
import {CardImg} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function AllSprites({userSprites}) {
    const [updateSprites,setUpdateSprites] = useState([])

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
        <div className="userSprites">
            <div className="spriteDetailsImage">
                <div className="spriteBox"></div>
                <div className="spriteGrid">
                    {updateSprites.map((sprite, index)=>(
                        <div className="spriteDetailsCtn d-flex" key={index} style={{gridColumnStart: sprite.col, gridRowStart: sprite.row}}>
                            <NavLink to={`/pixel/${sprite._id}`}>
                                <div className="spriteCtn">
                                    <CardImg src={sprite.itemImage} />
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllSprites;