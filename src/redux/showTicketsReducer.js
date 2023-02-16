/* eslint-disable prefer-destructuring */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */

const initialState = {
    numberOfTickets: 5,
    tickets: [],
    stop: false,
    loading: true,
};

const ShowTicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'show':
            return {
                ...state,
                numberOfTickets: state.numberOfTickets + 5,
            };
        case 'load_tickets':
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
