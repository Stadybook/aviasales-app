/* eslint-disable default-param-last */

const initialState = {
    show: 1,
};

const ShowTicketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'show':
            return {
                show: state.show + 1,
            };
        default:
            return state;
    }
};

export default ShowTicketsReducer;
