/* eslint-disable no-unused-vars */
import React from 'react';

import './App.scss';
import Header from '../Header';
import Filters from '../Filters';
import TicketsList from '../TicketsList';
import Tabs from '../Tabs';
import ShowMoreTickets from '../ShowMoreTickets';

function App() {
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

export default App;
