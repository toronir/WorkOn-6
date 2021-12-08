import "./main.scss"

import React from 'react'
import Header from "./components/header"
import { Col, Container, Row } from "react-bootstrap"
import { Outlet } from "react-router"






const App = () => {

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
        </>
    )

}
export default App
