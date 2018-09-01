import { IApisAction } from "../actions";
import { IMercurioApi } from "../apis";
import { SET_APIS } from "../constants";
import { apisInitialState } from "../initialStates";


export interface IApisState {
    mercurioApi: IMercurioApi;
}

export default function apisReducer(state = apisInitialState, action: IApisAction) {
    switch (action.type) {
        case SET_APIS: return { ...state, ...action.apis };
        default: return state;
    }
}
