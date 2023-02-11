/* eslint-disable default-param-last */
import { chipest, fastest, optimal } from './types';

const initialState = {
    btn: 'Самый дешевый',
};

const tabsReducer = (state = initialState, action) => {
    switch (action.type) {
        case chipest:
            return {
                btn: 'Самый дешевый',
            };
        case fastest:
            return {
                btn: 'Самый быстрый',
            };

        case optimal:
            return {
                btn: 'Оптимальный',
            };
        default:
            return state;
    }
};

export default tabsReducer;
