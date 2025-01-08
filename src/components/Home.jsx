import React from 'react'
import { Col, Row, Divider } from 'antd';
import traveller from '../assets/Traveller 1.png';
import play from '../assets//Play button.png';

import './style.css'
const Home = () => {
    return (
        <>
            {/* <Divider orientation="left">Percentage columns</Divider> */}
            <Row className='align-content-center my-3'>
                <Col span={10}  className='p-5' offset={1}>
                    <h6 style={{textTransform:'uppercase', color:'#DF6951'}} className='mb-3'>Best Destinations around the world</h6>
                    <h1 className="head mb-4" style={{fontWeight:'500'}}>Travel, enjoy
                        and live a new
                        and full life</h1>

                    <p style={{color:'#5E6282'}} className='mb-4'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    
                    <div className="both-front">
                    <button className='btn findBtn py-2'>Find out more</button>

                    <button  className='btn' style={{color:'rgb(82, 81, 81)'}}>
                        <img src={play} alt="" width={70} className='playBtn'/>
                        Play Demo
                    </button>
                    </div>
                </Col>

                <Col span={10} className='px-3 mt-3' offset={3}>
                    <img src={traveller} alt="" className='img-fluid' width={370} />
                </Col>

            </Row>
        </>
    )
}

export default Home