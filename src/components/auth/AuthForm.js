import React, { useState } from 'react';
import {Container, Card, Form, Row, Col, FormControl, Button} from "react-bootstrap";
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
                let res = await axios.post("/register", formData)
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
            let res = await axios.post("/login", formData)
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
        console.log(formData)
    }


    return (
        <Container>
            <Card className="row h1 text-center my-auto">
                <Card className="h5">{isSignup ? "Register" : "Log In"}</Card>
                <Form onSubmit={isSignup ? registerSubmit : loginSubmit}>
                    { isSignup && (
                        <Row>
                            {/*<FormControl className="col-6 mx-auto" type="text" placeholder="First Name" name="firstName" onChange={handleChange} ></FormControl>*/}
                            {/*<FormControl className="col-6 mx-auto" type="text" placeholder="Last Name" name="lastName" onChange={handleChange} ></FormControl>*/}
                                <FormControl className="col-6 mx-auto" type="text" placeholder="Username" name="displayName" onChange={handleChange} ></FormControl>
                        </Row>
                    )}
                    {/*<FormControl type="email" placeholder="Display Name" name="displayName" onChange={handleChange} />*/}
                    <FormControl type="email" placeholder="Email Address" name="email" onChange={handleChange} />
                    <FormControl placeholder="Password" name="password" onChange={handleChange} type={showPassword ? 'text' : 'password' } onClick={handleShowPassword}  />
                    {isSignup && <Form.Control className='confirmPassword' placeholder='Confirm Password' name="confirmPassword" onChange={handleChange} type="password" /> }
                    <Button type='submit' variant="primary" >
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <Row>
                        <Col>
                            <Button onClick={switchMode} >
                                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Container>

    );
}

export default Register;
