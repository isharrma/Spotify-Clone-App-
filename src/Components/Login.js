import React from 'react'

import { loginURL } from "./spotify"

import {Container ,Col,Row } from "reactstrap"
import "./CSS/Login.css"
import "bootstrap/dist/css/bootstrap.min.css";




export default function Login() {
    return (
        <Container fluid>
        <Row xs="4">
            <Col >
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""></img>
            </Col>
        </Row>
        <Row xs="4">
            <Col sm={{ size: 6, order: 2, offset: 1 }}>
                <a href={loginURL} className="link" 
                style={{
                    textDecoration:'none' , 
                    maxWidth:'70%',
                    display:'block',
                }}>Login</a>
            </Col>     
        </Row>
          
    </Container>
    )
}
