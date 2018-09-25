import * as React from 'react';

import { ISearchResult } from '../../apis';
import { IModalProps, Modal, ModalBody, ModalHeader } from '../style';
import { SerieNameSearch } from './SerieNameSearch';
import { SerieSearchForm } from './SerieSearchForm';
import { SerieSearchModalSearchResult } from './SerieSearchModalSearchResult';
import { SerieSearchResults } from './SerieSearchResults';


export class SerieSearchModal extends React.Component<IModalProps> {

    constructor(props: IModalProps) {
        super(props);

        this.renderResultWrapper = this.renderResultWrapper.bind(this);
    }

    public renderResultWrapper(renderedResult: JSX.Element, key: string | number, searchResult: ISearchResult) {
        return (
            <SerieSearchModalSearchResult key={key} searchResult={searchResult} onClick={this.props.onClose}>
                {renderedResult}
            </SerieSearchModalSearchResult>
        );
    }

    public render() {
        return (
            <Modal {...this.props}>
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
