import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const SecondCard = (props) => {
    return (
        <>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={props.img} />}
            >
                <Meta title={props.title} description={props.des} />
            </Card>
        </>
    )
}

export default SecondCard