/* eslint-disable no-unused-vars */
import Service from '../service/ServiceFile';

import { chipest, fastest, optimal, all, zero, one, two, three } from './types';

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

export function setAll() {
    return {
        type: all,
    };
}

export function setZero() {
    return {
        type: zero,
    };
}

export function setOne() {
    return {
        type: one,
    };
}

export function setTwo() {
    return {
        type: two,
    };
}

export function setThree() {
    return {
        type: three,
    };
}

export function showTickets() {
    const getTickets = new Service();
    getTickets.getInfo().then((body) => console.log(body.tickets));
    return {
        type: 'show',
    };
}

export function asyncShowTickets() {
    return (dispatch) => {
        dispatch(showTickets());
    };
}
