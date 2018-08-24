import IMercurioApi from "../apis/IMercurioApi";

import { IApisAction } from "../actions/apisActions";

import { SET_APIS } from "../constants/apisContstants";

import apisInitialState from "../initialStates/apisInitialState";


export interface IApisState {
    mercurioApi: IMercurioApi;
}

export default function apisReducer(state = apisInitialState, action: IApisAction) {
    switch (action.type) {
        case SET_APIS: return {...state, ...action.apis };
        default: return state;
    }
}
