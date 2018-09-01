import * as React from 'react';
import { connect } from 'react-redux';

import { search } from '../../actions'


export interface ISerieSearchFormProps extends React.Props<any> {
    search: () => void;
}

export function UnConnectedSerieSearchForm(props: ISerieSearchFormProps) {
    const handleSubmit = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        props.search();
    };

    return (
        <form className="w-100" onSubmit={handleSubmit}>
            <div className="row w-100">
                <div className="col">
                    {props.children}
                </div>
                <button type="submit" className="btn btn-primary col-2">Search</button>
            </div>
        </form>
    );
}

export const SerieSearchForm = connect(null, { search })(UnConnectedSerieSearchForm);
export default SerieSearchForm;
