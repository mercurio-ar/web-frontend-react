import { IStoreState } from "../reducers/rootReducer";

import currentVisualizationInitialState from "./currentVisualizationInitialState";


const initialState: IStoreState = {
    currentVisualization: currentVisualizationInitialState
}

export default initialState;