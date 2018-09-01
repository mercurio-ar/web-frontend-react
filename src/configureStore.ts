import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import initialSt from './initialStates/initialState';
import rootReducer from './reducers/rootReducer';


export default function configureStore(initialState = initialSt) {

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
