import * as React from 'react';
import { connect } from 'react-redux';

import { deleteVisualization } from '../../actions';
import { IVisualization } from "../../models";
import { Button, Modal, ModalFooter, ModalHeader } from '../style';


interface IDeleteVisulalizationActionProps extends React.Props<any> {
    visualization: IVisualization;
    deleteVisualization: (visualization: IVisualization) => void;
}

interface IDeleteVisulalizationActionState {
    isModalOpen: boolean;
}

export class UnConnectedDeleteVisualizationAction extends React.Component<IDeleteVisulalizationActionProps, IDeleteVisulalizationActionState>{

    constructor(props: IDeleteVisulalizationActionProps) {
        super(props);

        this.state = {
            isModalOpen: false,
        }

        this.delete = this.delete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    public handleClick(event: any) {
        event.stopPropagation();
        this.openModal();
    }

    public openModal() {
        this.setState({ isModalOpen: true });
    }

    public closeModal() {
        this.setState({ isModalOpen: false })
    }

    public delete() {
        this.closeModal();
        this.props.deleteVisualization(this.props.visualization);
    }

    public render() {
        return (
            <div>
                <i className="far fa-times-circle" onClick={this.handleClick} />
                <Modal open={this.state.isModalOpen} onClose={this.closeModal}>
                    <ModalHeader>
                        Are you sure?
                    </ModalHeader>
                    <ModalFooter>
                        <Button variant="danger" onClick={this.delete}>Delete</Button>
                        <Button variant="secondary" onClick={this.closeModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export const DeleteVisualizationAction = connect(null, { deleteVisualization })(UnConnectedDeleteVisualizationAction);

export default DeleteVisualizationAction;
