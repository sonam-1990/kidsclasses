import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { activities } from './activities';
import { reviews } from './reviews';
//import { promotions } from './promotions';
import { partners } from './partners';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            activities,
            reviews,
            partners
            
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}