import React from "react";
import './Tabs.scss';
import { Typography } from 'antd';
const { Text } = Typography;

function Tabs(){
    return(
        
        <div className="tabs">
            <button className="tab active">
                <Text >Самый дешевый</Text>
            </button> 
            <button className="tab">
                <Text >Самый быстрый</Text>
            </button> 
            <button className="tab">
           
                <Text >Оптимальный</Text>
            </button> 
        </div>
    )
}

export default Tabs;