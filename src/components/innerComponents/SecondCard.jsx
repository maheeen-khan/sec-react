import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const SecondCard = (props) => {
    return (
        <>
        <div class="card" id="card">
        <div class="content">


            <Card
            className='p-2 pt-3 sec-card'
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={props.img} style={{ width: props.size}} className='mx-auto'/>}
            >
                <Meta title={props.title} description={props.des} />
            </Card>
            </div>  </div>
        </>
    )
}

export default SecondCard