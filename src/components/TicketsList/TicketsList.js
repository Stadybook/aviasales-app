/* eslint-disable import/namespace */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

import { sortingByPrice, sortingByDuration } from '../../service/sorting';
import getId from '../../service/getId';
import Ticket from '../Ticket/Ticket';

import s from './TicketsList.module.scss';

function TicketsList(props) {
    let sortTickets = [];
    if (props.btn === 'Самый дешевый') {
        sortTickets = sortingByPrice(props.tickets);
    } else if (props.btn === 'Самый быстрый') {
        sortTickets = sortingByDuration(props.tickets);
    } else {
        sortTickets = props.tickets;
    }

    const elements = sortTickets
        .slice(0, props.numberOfTickets)
        .map((ticket) => {
            return <Ticket key={getId()} {...ticket} />;
        });

    return <ul className={s.tickets}>{elements}</ul>;
}

function mapStateToProps(state) {
    const { ShowTicketsReducer } = state;
    const { tabsReducer } = state;
    return {
        tickets: ShowTicketsReducer.tickets,
        numberOfTickets: ShowTicketsReducer.numberOfTickets,
        btn: tabsReducer.btn,
    };
}

export default connect(mapStateToProps)(TicketsList);
