import { IStoreState } from "../reducers/rootReducer";

import currentVisualizationInitialState from "./currentVisualizationInitialState";
import visualizationsInitialState from "./visualizationsInitialState"


const initialState: IStoreState = {
    currentVisualization: currentVisualizationInitialState,
    visualizations: visualizationsInitialState,
}

export default initialState;