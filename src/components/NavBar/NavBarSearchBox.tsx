import * as React from 'react';

import { SerieSearchModal } from '../SerieSearch/SerieSearchModal';
import { TextInput } from '../style';


interface INavBarSearchBoxProps extends React.Props<any> {

}

interface INavBarSearchBoxState {
    isModalOpen: boolean
}

export default class NavBarSearchBox extends React.Component<INavBarSearchBoxProps, INavBarSearchBoxState> {

    constructor(props: INavBarSearchBoxProps) {
        super(props);
        this.state = {
            isModalOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    public openModal() {
        this.setState({ isModalOpen: true });
    }

    public closeModal() {
        this.setState({ isModalOpen: false });
    }

    public render() {
        return (
            <div className="w-100">
                <TextInput
                    placeholder="Search"
                    aria-label="Search"
                    className="form-control form-control-dark w-100"
                    onClick={this.openModal}
                    style={{
                        background: 'rgba(255, 255, 255, .1)',
                        border: 'rgba(255, 255, 255, .1)',
                        color: '#fff',
                    }}
                />
                <SerieSearchModal open={this.state.isModalOpen} onClose={this.closeModal} />
            </div>
        );
    }
}
