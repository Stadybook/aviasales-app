/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';

import filtersReducer from './reducers/filtersReducer';
import tabsReducer from './reducers/tabsReducer';
import ShowTicketsReducer from './reducers/showTicketsReducer';

export const rootReducer = combineReducers({
    tabsReducer,
    filtersReducer,
    ShowTicketsReducer,
});
