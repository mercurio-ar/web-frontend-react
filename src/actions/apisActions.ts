import { Action } from 'redux';

import { SET_APIS } from '../constants';
import { IApisState } from '../reducers';


export interface IApisAction extends Action{
    apis: IApisState;
}

export function setApis(apis: IApisState){
    return {
        apis,
        type: SET_APIS,
    };
}
