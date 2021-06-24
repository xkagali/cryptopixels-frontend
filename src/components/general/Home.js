import {Card, CardImg, Col, Container} from "react-bootstrap";
import logo from "../../lib/img/Logo.png";
import React from "react";
import {NavLink} from "react-router-dom";

function Home(){
    let img1 ='https://res.cloudinary.com/dszsbox75/image/upload/v1624427746/vhjfttc4g3ecwsp10kpf.png'
    let img2 ='https://res.cloudinary.com/dszsbox75/image/upload/v1624427737/zwpfoganzikut5gj9lws.png'
    let img3 ='https://res.cloudinary.com/dszsbox75/image/upload/v1624427728/jweax5opbrcgsu3e9erb.png'
    let img4 ='https://res.cloudinary.com/dszsbox75/image/upload/v1624427717/d85p9xqxbcrdcm6esrbu.png'
    let img5 ='https://res.cloudinary.com/dszsbox75/image/upload/v1624427712/hdf8gs1kpnz42ostmnbb.png'

    let loopNo = 3
    let loopNoList =[]
    for (let i =0; i<loopNo;i++){
        loopNoList.push((i+1).toString())
    }
    console.log(loopNoList)
    return (
        <Container className='d-flex align-items-center justify-content-center body'>
            <div className='w-100' style={{maxWidth:'800px'}}>
                <h1 className="text-center headers"><img src={logo}/></h1>
                <h2 className="text-center headers">The Coolest NNFT to Buy, Trade and Sell!</h2>
                <h3 className="text-center headers">Sign up or view our Marketplace today!</h3>
                <div className="text-center headers"></div>
                <div className="ownerCard d-flex">
                    {loopNoList.map((value, index) => (
                        <div className="d-flex" key={index}>
                            <div className="spriteCtn">
                                <CardImg src={img1} />
                            </div>
                            <div className="spriteCtn">
                                <CardImg src={img2} />
                            </div>
                            <div className="spriteCtn">
                                <CardImg src={img3} />
                            </div>
                            <div className="spriteCtn">
                                <CardImg src={img4} />
                            </div>
                            <div className="spriteCtn">
                                <CardImg src={img5} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Home
