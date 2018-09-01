import * as React from 'react';
import { connect } from 'react-redux';

import { setSearchTerm } from '../../actions';
import { IStoreState } from '../../reducers';
import { getSearchTerm } from '../../selectors';


interface ISerieNameSearchProps extends React.Props<any> {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
}

export class UnConnectedSerieNameSearch extends React.Component<ISerieNameSearchProps> {

    constructor(props: ISerieNameSearchProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(event: any) {
        this.props.setSearchTerm(event.target.value);
    }

    public render() {
        return (
            <input
                type="text"
                className="form-control"
                id="searchName"
                placeholder="Search..."
                value={this.props.searchTerm}
                onChange={this.handleChange}
            />
        );
    }
}

function mapDispatchToProps(state: IStoreState) {
    return {
        searchTerm: getSearchTerm(state),
    }
}

export const SerieNameSearch = connect(mapDispatchToProps, { setSearchTerm })(UnConnectedSerieNameSearch);

export default SerieNameSearch;
