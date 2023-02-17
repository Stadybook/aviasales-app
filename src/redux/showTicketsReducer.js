/* eslint-disable default-param-last */
import { show, loadTickets } from './types';

const initialState = {
    numberOfTickets: 5,
    tickets: [],
    stop: false,
    loading: true,
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
        default:
            return state;
    }
};

export default ShowTicketsReducer;
