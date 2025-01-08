import React from 'react'
import { Col, Row, Divider } from 'antd';
import traveller from '../assets/Traveller 1.png';
import plane from '../assets/plane.png'

import './style.css'
const Home = () => {
    return (
        <>
            {/* <Divider orientation="left">Percentage columns</Divider> */}
            <Row className='mb-3 home'>

                <Col span={10} className='px-2 mt-3 homeImg' xs={24} sm={24} md={12} lg={12} xl={12}>

                    <img src={plane} alt="" />
                    <img src={traveller} alt="" className='img-fluid' width={370} />
                </Col>


                <Col span={10} className='p-lg-5 p-md-5 mt-5 homeCont' xs={24} sm={24} md={12} lg={12} xl={12}>
                    <h6 style={{ textTransform: 'uppercase', color: '#DF6951' }} className='mb-3'>Best Destinations around the world</h6>
                    <h1 className="head mb-4" style={{ fontWeight: '500', color: 'rgb(124, 124, 124)' }}>Travel, enjoy
                        and live a new
                        and full life</h1>

                    <p style={{ color: '#5E6282' }} className='mb-4'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

                    <div className="both-front d-flex align-items-center flex-wrap-reverse">
                        <button className='btn findBtn py-2 me-2'>Find out more</button>

                        {/* <button className='btn' style={{ color: 'rgb(82, 81, 81)' }}>
                            <img src={play} alt="" width={70} className='playBtn' />Play Demo
                        </button> */}

                        <button className="bookmarkBtn">
                            <span className="IconContainer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="gray"
                                    width="28px"
                                    height="48px">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </span>
                            <p className="text">Play Demo</p>
                        </button>

                    </div>
                </Col>


            </Row>
        </>
    )
}

export default Home