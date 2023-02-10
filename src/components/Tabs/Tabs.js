import React from "react";
import s from './Tabs.module.scss';
import { Typography } from 'antd';
const { Text } = Typography;

function Tabs(){
    return(
        
        <div className={s.tabs}>
            <button className={`${s['tab']} ${s['active']}`}>
                <Text >Самый дешевый</Text>
            </button> 
            <button className={s.tab}>
                <Text >Самый быстрый</Text>
            </button> 
            <button className={s.tab}>
           
                <Text >Оптимальный</Text>
            </button> 
        </div>
    )
}

export default Tabs;