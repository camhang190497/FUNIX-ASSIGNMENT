import {createStore, combineReducers,applyMiddleware } from 'redux';

import { Staffs } from './staffs';
import { Departments } from './departments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            departments: Departments,
            
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}