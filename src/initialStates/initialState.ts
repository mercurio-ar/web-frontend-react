import { IStoreState } from "../reducers/rootReducer";

import apisInitialState from "./apisInitialState";
import currentVisualizationInitialState from "./currentVisualizationInitialState";
import searchInitialState from "./searchInitialState";
import visualizationsInitialState from "./visualizationsInitialState";


const initialState: IStoreState = {
    apis: apisInitialState,
    currentVisualization: currentVisualizationInitialState,
    search: searchInitialState,
    visualizations: visualizationsInitialState,
}

export default initialState;