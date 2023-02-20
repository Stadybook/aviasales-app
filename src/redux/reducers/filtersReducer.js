/* eslint-disable default-param-last */
import {
    allTransfer,
    zeroTransfer,
    oneTransfer,
    twoTransfer,
    threeTransfer,
} from '../types';

const initialState = {
    allFilters: true,
    filters: { zero: true, one: true, two: true, three: true },
};

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case allTransfer:
            return {
                ...state,
                allFilters: action.payload,
            };

        case zeroTransfer:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    zero: action.payload,
                },
            };

        case oneTransfer:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    one: action.payload,
                },
            };
        case twoTransfer:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    two: action.payload,
                },
            };
        case threeTransfer:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    three: action.payload,
                },
            };
        default:
            return state;
    }
};

export default filtersReducer;
