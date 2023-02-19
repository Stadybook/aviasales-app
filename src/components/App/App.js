/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.scss';
import Header from '../Header';
import Filters from '../Filters';
import TicketsList from '../TicketsList';
import Tabs from '../Tabs';
import Spiner from '../Spiner/Spiner';
import DisconnectIndicator from '../DisconnectIndicator';
import { asyncShowTickets, asyncGetSearchId } from '../../redux/actions';

function App(props) {
    useEffect(() => {
        if (props.searchId === null) {
            props.getId();
        }
    }, []);

    useEffect(() => {
        let idInt;
        if (!props.stop && props.searchId) {
            idInt = setInterval(() => {
                props.loadTickets(props.searchId);
            }, 1000);
        }
        return () => clearInterval(idInt);
    }, [props.stop, props.searchId, props]);

    if (!navigator.onLine) {
        return <DisconnectIndicator />;
    }

    const ticketsContent =
        props.tickets.length === 0 ? <Spiner /> : <TicketsList />;

    const spin = !props.stop ? <Spiner /> : null;
    return (
        <div className='container'>
            {spin}
            <Header />
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
    const { tabsReducer } = state;
    return {
        tickets: ShowTicketsReducer.tickets,
        searchId: ShowTicketsReducer.searchId,
        stop: ShowTicketsReducer.stop,
        btn: tabsReducer.btn,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadTickets: (id) => dispatch(asyncShowTickets(id)),
        getId: () => dispatch(asyncGetSearchId()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
