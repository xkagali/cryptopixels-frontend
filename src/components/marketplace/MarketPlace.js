import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import SpriteCard from "./SpriteCard";
import axios from "axios";


function MarketPlace() {
    const [itemList,setItemList]=useState([])
    const [input,setInput]=useState('')
    const [sort,setSort]=useState('Alphabetical')

    useEffect(()=>{
        async function getItemList(){
            let {data} = await axios.get("/marketplace/")
            setItemList(data.items)
        }
        getItemList()
    },[])

    function searchChange(e){
        e.preventDefault()
        setInput(e.target.value)
    }

    function clickSort(e){
        e.preventDefault()
        setSort(e.target.value)
        console.log(e.target.value)
    }

    let tempItemList
    if(input.length>0){
        tempItemList = itemList.filter((i)=>{
            return (i.itemName).toLowerCase().match(input)
        })
    }else{
        tempItemList=itemList
    }


    tempItemList.sort(function(a,b){
        if (a.itemName.toLowerCase()<b.itemName.toLowerCase()
        )return -1
        if (a.itemName.toLowerCase()>b.itemName.toLowerCase()
        ) return 1
        return 0
    })

    if (sort=='Alphabetical'){
        tempItemList.sort(function(a,b){
            if (a.itemName.toLowerCase()<b.itemName.toLowerCase()
            )return -1
            if (a.itemName.toLowerCase()>b.itemName.toLowerCase()
            ) return 1
            return 0
        })
    } else if(sort=='Price High to Low'){
        tempItemList.sort(function(a,b){
            return b.priceListed-a.priceListed
        })
    } else if(sort=='Price Low to High'){
        tempItemList.sort(function(a,b){
            return a.priceListed-b.priceListed
        })
    }



    return (
        <>
            <Row className="mb-3">
                <Col className={"col-12"}>
                    <input type="text" name="search" className={"searchBar"} placeholder="Sprite Name" onChange={searchChange} value={input}/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col className={"col-12"}>
                    <Form>
                        <Form.Group controlId="exampleForm" className="d-flex justify-content-end align-items-center">
                            <Form.Label className="mb-0 mr-3 text-right">Sort:</Form.Label>
                            <Form.Control as="select" onChange={clickSort}>
                                <option>Alphabetical</option>
                                <option>Price High to Low</option>
                                <option>Price Low to High</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                {tempItemList.map(item=>(
                    <SpriteCard item={item} key={item._id}/>
                ))}
            </Row>
        </>
    );
}

export default MarketPlace;
