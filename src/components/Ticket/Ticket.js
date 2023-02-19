/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import format from 'date-fns/format';
import addMinutes from 'date-fns/addMinutes';

import {
    formattingToHours,
    formattingToMinutes,
    formattingPrice,
} from '../../helpFunctions/formattingDate';

import s from './Ticket.module.scss';
import photo from './S7 Logo.svg';

const { Text } = Typography;

function Ticket(props) {
    const price = formattingPrice(props.price);

    const origin1 = props.segments[0].origin;
    const destination1 = props.segments[0].destination;

    const origin2 = props.segments[1].origin;
    const destination2 = props.segments[1].destination;

    const transfersCount1 = props.segments[0].stops.length;
    const transfersCount2 = props.segments[1].stops.length;

    const departureTime1 = new Date(props.segments[0].date);
    const arrivalTime1 = addMinutes(
        new Date(props.segments[0].date),
        props.segments[0].duration
    );

    const flyTime1 = props.segments[0].duration;
    const flyTime2 = props.segments[1].duration;

    const departureTime2 = new Date(props.segments[1].date);
    const arrivalTime2 = addMinutes(
        new Date(props.segments[1].date),
        props.segments[0].duration
    );

    const stops1 = props.segments[0].stops.join(', ');
    const stops2 = props.segments[1].stops.join(', ');

    let text1 = 'пересадки';
    let text2 = 'пересадки';
    if (transfersCount1 === 0) {
        text1 = 'пересадок';
    }
    if (transfersCount1 === 1) {
        text1 = 'пересадка';
    }

    if (transfersCount2 === 0) {
        text2 = 'пересадок';
    }
    if (transfersCount2 === 1) {
        text2 = 'пересадка';
    }

    return (
        <div className={s.card}>
            <div className={s.head}>
                <Text>{`${price} P`}</Text>
                <div>
                    <img src={photo} alt='S7-LOGO' />
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            {origin1} –{destination1}
                        </th>
                        <th>В пути</th>
                        <th>
                            {transfersCount1} {text1}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {`${format(departureTime1, 'kk:mm')} –
                            ${format(arrivalTime1, 'kk:mm')}`}
                        </td>
                        <td>{`${formattingToHours(
                            flyTime1
                        )}ч ${formattingToMinutes(flyTime1)}м`}</td>
                        <td>{stops1}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>
                            {origin2} –{destination2}
                        </th>
                        <th>В пути</th>
                        <th>
                            {transfersCount2} {text2}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{`${format(departureTime2, 'kk:mm')} –
                            ${format(arrivalTime2, 'kk:mm')}`}</td>
                        <td>{`${formattingToHours(
                            flyTime2
                        )}ч ${formattingToMinutes(flyTime2)}м`}</td>
                        <td>{stops2}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function mapStateToProps(state) {
    const { ShowTicketsReducer } = state;
    return {
        tickets: ShowTicketsReducer.tickets,
    };
}

export default connect(mapStateToProps)(Ticket);
