/* eslint-disable import/namespace */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

import getId from '../../service/getId';
import Ticket from '../Ticket/Ticket';

import s from './TicketsList.module.scss';

function TicketsList(props) {
    const elements = props.tickets
        .slice(0, props.numberOfTickets)
        .map((ticket) => {
            return <Ticket key={getId()} {...ticket} />;
        });
    return <ul className={s.tickets}>{elements}</ul>;
}

function mapStateToProps(state) {
    const { ShowTicketsReducer } = state;
    return {
        tickets: ShowTicketsReducer.tickets,
        numberOfTickets: ShowTicketsReducer.numberOfTickets,
    };
}

export default connect(mapStateToProps)(TicketsList);
