import { Action } from 'redux';

import { SET_APIS } from '../constants/apisContstants';
import { IApisState } from '../reducers/apisReducer';


export interface IApisAction extends Action{
    apis: IApisState;
}

export function setApis(apis: IApisState){
    return {
        apis,
        type: SET_APIS,
    };
}