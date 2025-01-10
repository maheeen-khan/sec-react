import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row } from 'antd';
import img1 from '../../assets/Third1.png'
import nav from '../../assets/nav.png'
const { Meta } = Card;

const ThirdCard = () => (
  <Card 
  className='thir-car'
    style={{
      width: 250,
    }}
    cover={
      <img
        alt="example"
        src={img1}
      />
    }

  >

    <Row className='d-flex justify-content-between mb-2'>
        <Col>
        <h6 style={{fontSize:'14px', color:'rgb(72, 72, 72)'}}>Rome, Italty</h6>
        </Col>
        <Col>
        <h6  style={{fontSize:'14px', color:'rgb(72, 72, 72)'}}>$5,42k</h6>
        </Col>
    </Row>
    <Row>
      
        <Col style={{fontSize:'11px'}}>
        <p className='navImg'><img src={nav} alt="" className='me-2'/>
        10 Days Trip</p>
        </Col>
    </Row>

  </Card>
);
export default ThirdCard;