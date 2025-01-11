import React from 'react'
import { Row, Col } from 'antd'
import icon1 from '../assets/selection 1.png'
import icon2 from '../assets/water-sport 1.png'
import icon3 from '../assets/taxi 1.png'
import ForthCard from './innerComponents/ForthCard'
const Booking = () => {
  return (
    <>
    <div className="container my-5">

        <Row>
            <Col>
            <h6 style={{color:'rgb(104, 104, 104)'}}>Easy and Fast</h6>
            <h2 className='mb-5' style={{fontFamily:'hi'}}>Book your next trip in 3 easy steps</h2> <br />
            <Row>
                <Col>
                <div className="bg-warning p-2 rounded">
                <img src={icon1} alt="" className='iconImg' />
                </div>
                </Col>

                <Col className='ms-3'>
                <h6 style={{color:'rgb(104, 104, 104)', fontWeight:"bold"}}>Choose Destination</h6>
                <p style={{color:'rgb(104, 104, 104)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                </Col>
            </Row>

            <Row>
                <Col>
                <div className="bg-danger p-2 rounded">
                <img src={icon2} alt="" className='iconImg' />
                </div>
                </Col>
                <Col className='ms-3'>
                <h6 style={{color:'rgb(104, 104, 104)', fontWeight:'bold'}}>Make Payment</h6>
                <p style={{color:'rgb(104, 104, 104)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                </Col>
            </Row>

            <Row>
                <Col>
                <div className="bg-primary p-2 rounded">
                <img src={icon3} alt="" className='iconImg'/>
                </div>
                </Col>
                <Col className='ms-3'>
                <h6 style={{color:'rgb(104, 104, 104)', fontWeight:'bold'}}>Reach Airport on Selected Date</h6>
                <p style={{color:'rgb(104, 104, 104)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                </Col>
            </Row>
            </Col>
            
               
            <Col span={6} offset={6}>
           
               <ForthCard/>

            </Col>
        </Row>
    </div>
    </>
  )
}

export default Booking