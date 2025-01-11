import { Col, Row } from 'antd'
import React from 'react'
import ThirdCard from './innerComponents/ThirdCard'
import img1 from '../assets/Third1.png'
import img2 from '../assets/Third2.jpg'
import img3 from '../assets/Third3.png'

const Selling = () => {
    return (
        <>
            <div className="container text-center pt-4">

                <p>Top Selling</p>
                <h2 className='mb-5 third-head'>Top Destinations</h2>

                <Row className='gap-4'>
                    <Col>

                        <ThirdCard img={img1} name={'Rome, Italty'} price={'$5,42k'} days={'10 Days Trip'} />

                    </Col>

                    <Col>

                        <ThirdCard img={img2} name={'London, UK'} price={'$4.2k'} days={'12 Days Trip'} />

                    </Col>

                    <Col>

                        <ThirdCard img={img3} name={'Full Europe'} price={'$15k'} days={'28 Days Trip'} />

                    </Col>

                    <Col>

                        <ThirdCard img={img2} name={'London, UK'} price={'$4.2k'} days={'12 Days Trip'} />

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Selling