import React from 'react';
import { Typography } from 'antd';

import s from './Tabs.module.scss';

const { Text } = Typography;

function Tabs() {
    return (
        <div className={s.tabs}>
            <button type='button' className={`${s.tab} ${s.active}`}>
                <Text className={s.text}>Самый дешевый</Text>
            </button>
            <button type='button' className={s.tab}>
                <Text className={s.text}>Самый быстрый</Text>
            </button>
            <button type='button' className={s.tab}>
                <Text className={s.text}>Оптимальный</Text>
            </button>
        </div>
    );
}

export default Tabs;
