import { createSelector } from "reselect";

import { IStoreState } from "../reducers/rootReducer";


export function getApis(state: IStoreState) {
    return state.apis
}

export const getMercurioApi = createSelector(
    getApis,
    apis => apis.mercurioApi
);
