import * as React from 'react';
import { connect } from "react-redux";

import { setCurrentVisualizationName } from '../../../actions';
import { IStoreState } from "../../../reducers";
import { getCurrentVisualizationName } from "../../../selectors";
import { VisualizationNameEditor } from './VisualizationNameEditor';

export interface IVisualizationNameState {
    editing: boolean;
}

export interface IVisualizationNameProps {
    name?: string;
    setCurrentVisualizationName: (name: string) => void;
}

export class UnConnectedVisualizationName extends React.Component<IVisualizationNameProps, IVisualizationNameState> {

    constructor(props: IVisualizationNameProps) {
        super(props);

        this.state = {
            editing: false,
        }

        this.edit = this.edit.bind(this);
        this.changeName = this.changeName.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
    }

    public edit(event: React.MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ editing: true });
    }

    public changeName(name: string) {
        this.props.setCurrentVisualizationName(name);
        this.stopEditing();
    }

    public stopEditing() {
        this.setState({ editing: false });
    }

    public render() {
        if (this.state.editing && this.props.name) {
            return <VisualizationNameEditor
                name={this.props.name}
                onSubmit={this.changeName}
                onCancel={this.stopEditing}
            />
        } else {
            return <span onClick={this.edit}>{this.props.name}</span>;
        }
    }
}

function mapStateToProps(state: IStoreState) {
    return {
        name: getCurrentVisualizationName(state),
    }
}

export default connect(mapStateToProps, { setCurrentVisualizationName })(UnConnectedVisualizationName);
