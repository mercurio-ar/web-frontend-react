import * as React from 'react';

import { Modal, TextInput } from '../style';

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
    }

    public closeModal(){
        this.setState({isModalOpen: false});
    }

    public render() {
        return (
            <div>
                <TextInput placeholder="Search" aria-label="Search" />
                <Modal open={this.state.isModalOpen}>
                    <ModalTitle onClose={this.closeModal}>
                        <SerieSearchForm>
                            <SerieNameSearh />
                        </SerieSearchForm>
                    </ModalTitle>
                    <ModalContent>
                        <SerieSearchResults />
                    </ModalContent>
                </Modal>
            </div>
        );
    }
}