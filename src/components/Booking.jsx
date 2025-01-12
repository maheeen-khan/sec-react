import React from 'react'
import { Row, Col } from 'antd'
import icon1 from '../assets/selection 1.png'
import icon2 from '../assets/water-sport 1.png'
import icon3 from '../assets/taxi 1.png'
import ForthCard from './innerComponents/ForthCard'
const Booking = () => {
  return (
    <>
    <div className=""  style={{backgroundColor:'rgb(243, 243, 243)'}}>
    <div className="container my-5 py-5">

        <Row>
            <Col span={12} offset={1}>
            <h6 style={{color:'rgb(104, 104, 104)'}} className='mb-4'>Easy and Fast</h6>
            <h2 className='mb-4' style={{fontFamily:'hi'}}>Book your next trip in 3 easy steps</h2> <br />
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
            
               
            <Col span={5} offset={4} className='mt-4'>
           
               <ForthCard/>

            </Col>
        </Row>
    </div>
    </div>
    </>
  )
}

export default Booking