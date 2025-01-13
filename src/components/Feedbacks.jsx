import { Col, Row } from 'antd'
import React from 'react'
import FifthCard from './innerComponents/FifthCard'

const Feedbacks = () => {
  return (
    <>
    <Row >
        <Col sm={24} md={24} lg={8}>
        <h6 style={{color:'grey'}}>Testimonials</h6>
        <h2 style={{fontFamily:'hi'}}>What people say about Us.</h2>
        </Col>

        <Col>
        <FifthCard/>
        </Col>

    </Row>
    </>
  )
}

export default Feedbacks