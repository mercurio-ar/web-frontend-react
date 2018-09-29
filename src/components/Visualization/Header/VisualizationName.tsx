import * as React from 'react';
import { connect } from "react-redux";

import { IStoreState } from "../../../reducers";
import { getCurrentVisualizationName } from "../../../selectors";


export interface IVisualizationNameProps {
    name?: string;
}

export function UnConnectedVisualizationName(props: IVisualizationNameProps) {
    return <span>{props.name}</span>;
}

function mapStateToProps(state: IStoreState) {
    return {
        name: getCurrentVisualizationName(state),
    }
}

export default connect(mapStateToProps)(UnConnectedVisualizationName);
