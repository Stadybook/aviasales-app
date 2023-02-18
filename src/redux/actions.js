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
    show,
    loadTickets,
} from './types';

const getTickets = new Service();

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
        type: show,
    };
}

function showTickets(payload) {
    return {
        type: loadTickets,
        payload,
    };
}

function getSearchId(payload) {
    return {
        type: 'getSearchId',
        payload,
    };
}

export function asyncGetSearchId() {
    return (dispatch) => {
        getTickets.getSearchId().then((id) => {
            sessionStorage.setItem('searchId', id);
            dispatch(getSearchId(id));
        });
    };
}

export function asyncShowTickets(id) {
    return (dispatch) => {
        getTickets
            .getInfo(id)
            .then((body) => dispatch(showTickets([body.tickets, body.stop])));
    };
}
