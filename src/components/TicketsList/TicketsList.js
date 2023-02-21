import React from 'react';
import { connect } from 'react-redux';

import {
    sortingByPrice,
    sortingByDuration,
    filteringByTransfers,
    getActiveFilters,
    sortingByOptimal,
} from '../../helpFunctions/sorting';
import getId from '../../helpFunctions/getId';
import Ticket from '../Ticket/Ticket';
import ShowMoreTickets from '../ShowMoreTickets';

import s from './TicketsList.module.scss';

function TicketsList(props) {
    const { tickets, allFilters, filters, btn, numberOfTickets } = props;
    let sortTickets = [];
    if (btn === 'Самый дешевый') {
        sortTickets = sortingByPrice(tickets);
    } else if (btn === 'Самый быстрый') {
        sortTickets = sortingByDuration(tickets);
    } else {
        sortTickets = sortingByOptimal(tickets);
    }

    const res = getActiveFilters(filters);
    const filterTickets = sortTickets.filter((ticket) =>
        filteringByTransfers(ticket, allFilters, res)
    );

    const elements = filterTickets.slice(0, numberOfTickets).map((ticket) => {
        return <Ticket key={getId()} {...ticket} />;
    });
    const button = numberOfTickets === 9555 ? null : <ShowMoreTickets />;

    const content =
        elements.length !== 0 ? (
            <>
                <ul className={s.tickets}>{elements}</ul>
                {button}
            </>
        ) : null;

    const text =
        elements.length === 0 ? (
            <div className={s.text}>
                <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
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
