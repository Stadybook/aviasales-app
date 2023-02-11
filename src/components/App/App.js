/* eslint-disable no-unused-vars */
import React from 'react';

import './App.scss';
import Header from '../Header';
import Filters from '../Filters';
import TicketsList from '../TicketsList';
import Tabs from '../Tabs';
import Service from '../../service/ServiceFile';

function App() {
    const getInfo = new Service();

    // getInfo.getInfo().then((body) => console.log(body));

    return (
        <div className='container'>
            <Header />
            <div className='main'>
                <Filters />
                <div className=''>
                    <Tabs />
                    <TicketsList />
                </div>
            </div>
        </div>
    );
}

export default App;
