import * as React from 'react';
import { connect } from 'react-redux';

import { newVisualizationFromSearchResult } from '../../actions';
import { ISearchResult } from '../../apis';
import { SerieSearchModal } from '../SerieSearch';
import { TextInput } from '../style';


interface INavBarSearchBoxProps extends React.Props<any> {
    newVisualizationFromSearchResult: (searchResult: ISearchResult) => void;
}

interface INavBarSearchBoxState {
    isModalOpen: boolean
}

export class UnConnectedNavBarSearchBox extends React.Component<INavBarSearchBoxProps, INavBarSearchBoxState> {

    constructor(props: INavBarSearchBoxProps) {
        super(props);
        this.state = {
            isModalOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSearchResultClick = this.handleSearchResultClick.bind(this);
    }

    public handleSearchResultClick(event: React.SyntheticEvent, searchResult: ISearchResult){
        this.props.newVisualizationFromSearchResult(searchResult);
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
                <SerieSearchModal 
                open={this.state.isModalOpen} 
                onClose={this.closeModal} 
                onSearchResultClick={this.handleSearchResultClick}
                />
            </div>
        );
    }
}

export const NavBarSearchBox: any = connect(null, {newVisualizationFromSearchResult})(UnConnectedNavBarSearchBox);

export default NavBarSearchBox;
