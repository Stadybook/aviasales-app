/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './App.scss';
import Header from '../Header';
import Filters from '../Filters';
import TicketsList from '../TicketsList';
import Tabs from '../Tabs';
import ShowMoreTickets from '../ShowMoreTickets';
import Spiner from '../Spiner/Spiner';
import DisconnectIndicator from '../DisconnectIndicator';
import { asyncShowTickets } from '../../redux/actions';

function App(props) {
    useEffect(() => {
        if (!props.stop) {
            props.loadTickets();
        }
    }, [props.stop]);

    if (!navigator.onLine) {
        return <DisconnectIndicator />;
    }

    const ticketsContent =
        props.tickets.length === 0 ? <Spiner /> : <TicketsList />;

    return (
        <div className='container'>
            <Header />
            <div className='content'>
                <Filters />
                <div className='main'>
                    <Tabs />
                    {ticketsContent}
                    <ShowMoreTickets />
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
        stop: ShowTicketsReducer.stop,
        btn: tabsReducer.btn,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadTickets: () => dispatch(asyncShowTickets()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
