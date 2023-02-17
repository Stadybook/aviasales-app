/* eslint-disable no-unused-vars */
import Service from '../service/ServiceFile';

import {
    chipest,
    fastest,
    optimal,
    allTransfer,
    zeroTransfer,
    oneTransfer,
    twoTransfer,
    threeTransfer,
} from './types';

export function chooseChipest() {
    return {
        type: chipest,
    };
}

export function chooseFastest() {
    return {
        type: fastest,
    };
}

export function chooseOptimal() {
    return {
        type: optimal,
    };
}

export function setAll(payload) {
    return {
        type: allTransfer,
        payload,
    };
}

export function setZero(payload) {
    return {
        type: zeroTransfer,
        payload,
    };
}

export function setOne(payload) {
    return {
        type: oneTransfer,
        payload,
    };
}

export function setTwo(payload) {
    return {
        type: twoTransfer,
        payload,
    };
}

export function setThree(payload) {
    return {
        type: threeTransfer,
        payload,
    };
}

export function addFiveTickets() {
    return {
        type: 'show',
    };
}

export function showTickets(payload) {
    return {
        type: 'load_tickets',
        payload,
    };
}

export function asyncShowTickets(btn) {
    return (dispatch) => {
        const getTickets = new Service();
        getTickets
            .getInfo()
            .then((body) => dispatch(showTickets([body.tickets, body.stop])));
    };
}
