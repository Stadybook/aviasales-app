/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';

import tabsReducer from './tabsReducer';

export const rootReducer = combineReducers({
    tabsReducer,
});
