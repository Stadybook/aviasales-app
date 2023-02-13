/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';

import filtersReducer from './filtersReducer';
import tabsReducer from './tabsReducer';
import ShowTicketsReducer from './showTicketsReducer';

export const rootReducer = combineReducers({
    tabsReducer,
    filtersReducer,
    ShowTicketsReducer,
});
