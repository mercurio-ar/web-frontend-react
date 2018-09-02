import { IVisualizationsState } from "../reducers/visualizationReducer";


export const visualizationInitialState: IVisualizationsState = {
    fetching: false,
    visualizations: [],
};

export default visualizationInitialState;