/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

import {
    sortingByPrice,
    sortingByDuration,
    filteringByTransfers,
    getActiveFilters,
} from '../../helpFunctions/sorting';
import getId from '../../helpFunctions/getId';
import Ticket from '../Ticket/Ticket';
import ShowMoreTickets from '../ShowMoreTickets';

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

    const res = getActiveFilters(props.filters);
    const filterTickets = sortTickets.filter((ticket) =>
        filteringByTransfers(ticket, props.allFilters, res)
    );

    const elements = filterTickets
        .slice(0, props.numberOfTickets)
        .map((ticket) => {
            return <Ticket key={getId()} {...ticket} />;
        });

    const content =
        elements.length !== 0 ? (
            <>
                <ul className={s.tickets}>{elements}</ul>
                <ShowMoreTickets />
            </>
        ) : null;

    const text =
        elements.length === 0 ? (
            <div className={s.text}>
                <span>Билеты по запросу не найдены</span>
            </div>
        ) : null;

    return (
        <>
            {text}
            {content}
        </>
    );
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
