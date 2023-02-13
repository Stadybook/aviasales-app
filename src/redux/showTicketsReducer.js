/* eslint-disable default-param-last */

const initialState = {
    numberOfTickets: 5,
};

const ShowTicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'show':
            return {
                numberOfTickets: state.numberOfTickets + 5,
            };
        default:
            return state;
    }
};

export default ShowTicketsReducer;
