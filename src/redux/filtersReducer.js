/* eslint-disable default-param-last */
import { all, zero, one, two, three } from './types';

const initialState = {
    fiter: 'all',
};

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case all:
            return {
                btn: 'all',
            };
        case zero:
            return {
                btn: 'zero',
            };

        case one:
            return {
                btn: 'one',
            };
        case two:
            return {
                btn: 'two',
            };
        case three:
            return {
                btn: 'three',
            };
        default:
            return state;
    }
};

export default filtersReducer;

// // filterTickets.sort((previous, next) => (previous.price > next.price ? 1 : -1));
// data.sort((a, b) => a.price.localeCompare(b.price));
