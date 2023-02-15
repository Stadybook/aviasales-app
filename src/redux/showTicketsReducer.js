/* eslint-disable default-param-last */

const initialState = {
    numberOfTickets: 5,
    tickets: [],
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
                tickets: [...state.tickets, ...action.payload],
            };
        default:
            return state;
    }
};

export default ShowTicketsReducer;
