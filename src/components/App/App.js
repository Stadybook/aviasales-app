/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
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
    // const [stopFetch , setStop] = useState(false)

    useEffect(() => {
        if (props.searchId === null) {
            props.getId();
        }
    }, []);

    useEffect(() => {
        console.log(props.tickets);
        if (!props.stop && props.searchId !== null) {
            /* setInterval(() => {
                props.loadTickets(props.searchId)
            }, 2000); */
            props.loadTickets(props.searchId);
        }
    }, [props.stop, props.searchId, props.tickets]);

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
