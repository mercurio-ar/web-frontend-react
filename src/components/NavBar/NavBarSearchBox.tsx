import * as React from 'react';

import { ISearchResult } from '../../apis';
import { SerieNameSearch, SerieSearchForm, SerieSearchResults } from '../SerieSearch';
import { Modal, ModalBody, ModalHeader, TextInput } from '../style';
import { NavBarSearchResult } from './';


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
        this.renderResultWrapper = this.renderResultWrapper.bind(this);
    }

    public openModal() {
        this.setState({ isModalOpen: true });
    }

    public closeModal() {
        this.setState({ isModalOpen: false });
    }

    public renderResultWrapper(renderedResult: JSX.Element, key: string | number, searchResult: ISearchResult) {
        return (
            <NavBarSearchResult key={key} searchResult={searchResult} onClick={this.closeModal}>
                {renderedResult}
            </NavBarSearchResult>
        );
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
                <Modal open={this.state.isModalOpen} onClose={this.closeModal}>
                    <ModalHeader>
                        <SerieSearchForm>
                            <SerieNameSearch />
                        </SerieSearchForm>
                    </ModalHeader>
                    <ModalBody>
                        <SerieSearchResults renderResultWrapper={this.renderResultWrapper} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
