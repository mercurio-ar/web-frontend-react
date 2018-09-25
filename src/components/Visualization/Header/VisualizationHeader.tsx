import * as React from 'react';

import {
    VisualizationAdd,
    VisualizationExport,
    VisualizationShare,
    VisualizationTakeSnapshot,
} from './Actions';
import VisualizationName from './VisualizationName';


export default class VisualizationHeader extends React.Component {

    public render() {
        return (
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">
                    <VisualizationName />
                </h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                        <VisualizationAdd />
                        <VisualizationTakeSnapshot />
                        <VisualizationShare />
                        <VisualizationExport />
                    </div>
                </div>
            </div>
        );
    }
}
