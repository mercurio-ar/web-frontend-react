import * as React from 'react';

import { ISearchResult } from '../../apis';
import { IModalProps, Modal, ModalBody, ModalHeader } from '../style';
import { SerieNameSearch } from './SerieNameSearch';
import { SerieSearchForm } from './SerieSearchForm';
import SerieSearchModalSearchResult from './SerieSearchModalSearchResult';
import { SerieSearchResults } from './SerieSearchResults';


export interface ISerieSearchModalProps extends IModalProps{
    onSearchResultClick: (event: React.SyntheticEvent, searchResult: ISearchResult) => void;
}

export class SerieSearchModal extends React.Component<ISerieSearchModalProps> {

    constructor(props: ISerieSearchModalProps) {
        super(props);

        this.renderResultWrapper = this.renderResultWrapper.bind(this);
    }

    public renderResultWrapper(renderedResult: JSX.Element, key: string | number, searchResult: ISearchResult) {
        return (
            <SerieSearchModalSearchResult key={key} searchResult={searchResult} onClick={this.props.onSearchResultClick}>
                {renderedResult}
            </SerieSearchModalSearchResult>
        );
    }

    public render() {
        const modalProps = {
            onClose: this.props.onClose,
            open: this.props.open,
        }
        return (
            <Modal {...modalProps}>
                <ModalHeader>
                    <SerieSearchForm>
                        <SerieNameSearch />
                    </SerieSearchForm>
                </ModalHeader>
                <ModalBody>
                    <SerieSearchResults renderResultWrapper={this.renderResultWrapper} />
                </ModalBody>
            </Modal>
        );
    }
}
