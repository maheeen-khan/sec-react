import { Col, Row } from 'antd'
import React from 'react'
import ThirdCard from './innerComponents/ThirdCard'

const Selling = () => {
    return (
        <>
            <div className="container">

                <p>Top Selling</p>
                <h2>Top Destinations</h2>

                <Row>
                    <Col>

                     <ThirdCard/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Selling