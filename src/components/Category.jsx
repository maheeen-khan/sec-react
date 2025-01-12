import React from 'react'
import { Col, Row, Divider } from 'antd';
import SecondCard from './innerComponents/SecondCard';
import pic1 from '../assets/sec1.png'
import pic2 from '../assets/sec2.png'
import pic3 from '../assets/sec3.png'
import pic4 from '../assets/sec4.png'


const Category = () => {
    return (
        <>
        <div className="container-fluid back">
            <div className="container my-5">
                <p className='text-center' style={{ color: 'grey', fontWeight: '500' }}>CATEGORY</p>
                <h2 className='text-center sec-head mb-5'>We Offer Best Services</h2>
                <Row>
                    <div className="secCards d-flex flex-wrap gap-4 mt-3 text-center">
                        <Col>
                            <SecondCard title={'Calculated Weather'} des={'Built Wicket longer admire do barton vanity itself do in it.'} img={pic1} size={'100px'} />
                        </Col>

                        <Col>
                            <SecondCard title={'Best Flights'} des={'Engrossed listening. Park gate sell they west hard for the.'} img={pic2} size={'120px'} />
                        </Col>

                        <Col>
                            <SecondCard title={'Local Events'} des={'Barton vanity itself do in it. Preferd to men it engrossed listening.'} img={pic3} size={'74px'} />
                        </Col>
                        <Col>
                            <SecondCard title={'Customization'} des={'We deliver outsourced aviation services for military customers'} img={pic4} size={'93px'} />
                        </Col>
                    </div>
                </Row>
            </div>
        </div>
        </>
    )
}

export default Category