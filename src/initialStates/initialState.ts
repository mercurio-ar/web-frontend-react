import { IStoreState } from "../reducers/rootReducer";

import apisInitialState from "./apisInitialState";
import currentVisualizationInitialState from "./currentVisualizationInitialState";
import visualizationsInitialState from "./visualizationsInitialState"


const initialState: IStoreState = {
    apis: apisInitialState,
    currentVisualization: currentVisualizationInitialState,
    visualizations: visualizationsInitialState,
}

export default initialState;