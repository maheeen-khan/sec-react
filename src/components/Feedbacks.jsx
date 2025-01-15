import { Col, Row } from 'antd'
import React from 'react'
import FifthCard from './innerComponents/FifthCard'

const Feedbacks = () => {
  return (
    <>
    <div className="container py-5 feed">
    <Row justify="space-around" align="middle" className="d-flex align-items-center">
        <Col sm={24} md={24} lg={8}>
        <h6 style={{color:'#31ade2'}} className='mb-3'>Testimonials</h6>
        <h2 style={{fontFamily:'hi'}} className='mb-4'>What people say about Us.</h2>
        <p style={{color:'grey'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quos nesciunt labore sit, quae repellendus maxime hic id illo et.</p>
        </Col>

        <Col className='d-flex feedCards'>
       
        <div className="col1">
        <FifthCard/>
        </div>
        <FifthCard/>
        
        </Col>

    </Row>
    </div>
    </>
  )
}

export default Feedbacks