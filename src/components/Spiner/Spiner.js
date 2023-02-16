/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './Spiner.scss';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);

function Spiner() {
    return (
        <div className='spiner'>
            <Spin indicator={antIcon} tip='Ticket loading...' size='large' />
        </div>
    );
}

export default Spiner;
