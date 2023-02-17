/* eslint-disable prefer-const */
/* eslint-disable import/namespace */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

import {
    sortingByPrice,
    sortingByDuration,
    filteringByTransfers,
} from '../../service/sorting';
import getId from '../../service/getId';
import Ticket from '../Ticket/Ticket';

import s from './TicketsList.module.scss';

function TicketsList(props) {
    // console.log(props.filters, props.allFilters);
    let sortTickets = [];
    if (props.btn === 'Самый дешевый') {
        sortTickets = sortingByPrice(props.tickets);
    } else if (props.btn === 'Самый быстрый') {
        sortTickets = sortingByDuration(props.tickets);
    } else {
        sortTickets = props.tickets;
    }

    /* let filterTickets = [];

    if (props.filter.zero) {
        filterTickets = filteringByTransfers(sortTickets);
    } else {
        filterTickets = sortTickets;
    } */

    const elements = sortTickets // filterTickets
        .slice(0, props.numberOfTickets)
        .map((ticket) => {
            return <Ticket key={getId()} {...ticket} />;
        });

    return <ul className={s.tickets}>{elements}</ul>;
}

function mapStateToProps(state) {
    const { ShowTicketsReducer } = state;
    const { tabsReducer } = state;
    const { filtersReducer } = state;
    return {
        tickets: ShowTicketsReducer.tickets,
        numberOfTickets: ShowTicketsReducer.numberOfTickets,
        btn: tabsReducer.btn,
        filters: filtersReducer.filters,
        allFilters: filtersReducer.allFilters,
    };
}

export default connect(mapStateToProps)(TicketsList);
