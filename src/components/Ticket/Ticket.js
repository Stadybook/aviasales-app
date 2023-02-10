import React from "react";
import s from './Ticket.module.scss';
import photo  from './S7 Logo.svg'
import { Typography } from 'antd';
const { Text } = Typography;

function Ticket(){
    return(
        <div className={s.card}>
            <div className={s.head}>
                <Text>13 000 Р</Text>
                <div>
                    <img src={photo} alt='S7-LOGO'></img>
                </div>
            </div>
            <table> 
                <thead>
                    <tr>
                        <th>MOW – HKT</th>
                        <th>В пути</th>
                        <th>2 пересадки</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10:45 – 08:00</td>
                        <td>21ч 15м</td>
                        <td>HKG, JNB</td>
                    </tr> 
                </tbody> 
            </table>
            <table> 
                <thead>
                    <tr>
                        <th>MOW – HKT</th>
                        <th>В пути</th>
                        <th>2 пересадки</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10:45 – 08:00</td>
                        <td>21ч 15м</td>
                        <td>HKG, JNB</td>
                    </tr> 
                </tbody> 
            </table>
            
        </div>
    )
}

export default Ticket;