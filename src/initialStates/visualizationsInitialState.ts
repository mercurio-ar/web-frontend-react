import { IVisualizationsState } from "../reducers/visualizationReducer";


const visualizationInitialState: IVisualizationsState = {
    fetching: false,
    visualizations: [],
};

export default visualizationInitialState;