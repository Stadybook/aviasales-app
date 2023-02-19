/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './Loader.scss';
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

function Loader() {
    return (
        <div className='loader'>
            <Spin indicator={antIcon} size='large' />
        </div>
    );
}

export default Loader;
