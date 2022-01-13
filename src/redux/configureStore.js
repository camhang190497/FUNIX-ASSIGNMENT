import {createStore, combineReducers,applyMiddleware } from 'redux';
import { StaffsSalary } from './staffsSalary';
import { Staffs } from './staffs';
import { Departments } from './departments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            departments: Departments,
            staffsSalary: StaffsSalary
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}