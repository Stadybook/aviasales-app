/* eslint-disable default-param-last */
import { show, loadTickets } from './types';

const initialState = {
    numberOfTickets: 5,
    tickets: [],
    stop: false,
    loading: true,
    searchId: sessionStorage.getItem('searchId'),
};

const ShowTicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case show:
            return {
                ...state,
                numberOfTickets: state.numberOfTickets + 5,
            };
        case loadTickets:
            return {
                ...state,
                tickets: [...state.tickets, ...action.payload[0]],
                stop: action.payload[1],
            };
        case 'getSearchId':
            return {
                ...state,
                searchId: action.payload,
            };
        default:
            return state;
    }
};

export default ShowTicketsReducer;
