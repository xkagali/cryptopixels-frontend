import React, { useState } from 'react';
import {Form, Row, Col, FormControl, Button} from "react-bootstrap";
import axios from "axios";
import { useHistory } from 'react-router-dom'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''} //for sign up field

function Register({auth, setAuth, user}) {
    //click to show password
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    //toggle between registration and login
    const [isSignup, setIsSignup] = useState(true);
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
        setShowPassword(false)
    }

    //handles input fields
    const [formData, setFormData] = useState(initialState)
    const history = useHistory()

    const registerSubmit = async(e) => {
        e.preventDefault(); //prevent refresh on form submit
            try {
                let res = await axios.post("/auth/register", formData)
                console.log(res)
                console.log(res.data.token)
                localStorage.setItem("token", res.data.token)
                setAuth(true)
                history.push('/')
            } catch (error) {
                console.log(error)
                alert(error)
            }
        }

    const loginSubmit = async(e) => {
        e.preventDefault(); //prevent refresh on form submit
        try {
            let res = await axios.post("/auth/login", formData)
            console.log(res.data.token)
            localStorage.setItem("token", res.data.token)
            setAuth(true)
            history.push('/')
        }catch(error){
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    return (
        <Row className="justify-content-center">
            <Col className="col-12 text-center"><h3>{isSignup ? "Register" : "Log In"}</h3></Col>
            <Col className="col-12 col-md-8">
                <Row>
                    <Col className="col-12">
                        <Form onSubmit={isSignup ? registerSubmit : loginSubmit}>
                            { isSignup && (
                                <Row className="align-items-center">
                                    <Col className="col-3 text-right">
                                        <label>Username</label></Col>
                                    <Col className="col-9">
                                        {/*<FormControl className="col-6 mx-auto" type="text" placeholder="First Name" name="firstName" onChange={handleChange} ></FormControl>*/}
                                        {/*<FormControl className="col-6 mx-auto" type="text" placeholder="Last Name" name="lastName" onChange={handleChange} ></FormControl>*/}
                                        <input type="text" placeholder="Username" name="displayName" onChange={handleChange} />
                                    </Col>
                                </Row>
                            )}
                            {/*<FormControl type="email" placeholder="Display Name" name="displayName" onChange={handleChange} />*/}
                            <Row className="align-items-center">
                                <Col className="col-3 text-right">
                                    <label>Email</label></Col>
                                <Col className="col-9">
                                    <input type="email" placeholder="Email Address" name="email" onChange={handleChange} />
                                </Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col className="col-3 text-right">
                                    <label>Password</label></Col>
                                <Col className="col-9">
                                    <input placeholder="Password" name="password" onChange={handleChange} type={showPassword ? 'text' : 'password' } onClick={handleShowPassword}  />
                                </Col>
                            </Row>
                            {isSignup &&
                            <Row className="align-items-center">
                                <Col className="col-3 text-right">
                                    <label>Confirm Password</label></Col>
                                <Col className="col-9">
                            <input className='confirmPassword' placeholder='Confirm Password' name="confirmPassword" onChange={handleChange} type="password" />
                                </Col>
                            </Row>
                            }
                            <Row className="mt-2 mb-4 text-center">
                                <Col className="col-12">
                                    <Button type='submit' variant="primary" >
                                        {isSignup ? "Sign Up" : "Sign In"}
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <Col className="col-12">
                                    <a onClick={switchMode} >
                                        {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                                    </a>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>

    );
}

export default Register;
