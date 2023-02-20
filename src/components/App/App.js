/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.scss';
import Header from '../Header';
import Filters from '../Filters';
import TicketsList from '../TicketsList';
import Tabs from '../Tabs';
import Spiner from '../Spiner/Spiner';
import Loader from '../Loader';
import DisconnectIndicator from '../DisconnectIndicator';
import { asyncShowTickets, asyncGetSearchId } from '../../redux/actions';

function App(props) {
    const { stop, tickets, searchId, loadTickets, getId } = props;
    useEffect(() => {
        if (searchId === null) {
            getId();
        }
    }, []);

    useEffect(() => {
        let idInt;
        if (!stop && searchId) {
            idInt = setInterval(() => {
                loadTickets(searchId);
            }, 1000);
        }
        return () => clearInterval(idInt);
    }, [stop, searchId]);

    if (!navigator.onLine) {
        return <DisconnectIndicator />;
    }

    const ticketsContent = tickets.length === 0 ? <Spiner /> : <TicketsList />;

    const header = !stop ? <Loader /> : <Header />;
    return (
        <div className='container'>
            {header}
            <div className='content'>
                <Filters />
                <div className='main'>
                    <Tabs />
                    {ticketsContent}
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    const { ShowTicketsReducer } = state;
    return {
        tickets: ShowTicketsReducer.tickets,
        searchId: ShowTicketsReducer.searchId,
        stop: ShowTicketsReducer.stop,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadTickets: (id) => dispatch(asyncShowTickets(id)),
        getId: () => dispatch(asyncGetSearchId()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
