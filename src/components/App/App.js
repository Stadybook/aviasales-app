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
import { asyncShowTickets, showTickets } from '../../redux/actions';

function App(props) {
    useEffect(() => {
        props.loadTickets();
    }, []);

    return (
        <div className='container'>
            <Header />
            <div className='content'>
                <Filters />
                <div className='main'>
                    <Tabs />
                    <TicketsList />
                    <ShowMoreTickets />
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    const { ShowTicketsReducer } = state;
    return {
        tickets: ShowTicketsReducer.tickets,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadTickets: () => dispatch(asyncShowTickets()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
