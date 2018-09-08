import * as React from 'react';
import { LocalizeContextProps, Translate, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';

import { search } from '../../actions'
import { SerieSearchFormTranslations } from '../../translations';
import { Button } from '../style';


export interface IUnLocalizeSerieSearchFormProps extends React.Props<any> {
    search: () => void;
}

type ISerieSearchFormProps = LocalizeContextProps & IUnLocalizeSerieSearchFormProps;

export class UnConnectedSerieSearchForm extends React.Component<ISerieSearchFormProps> {

    constructor(props: ISerieSearchFormProps) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.props.addTranslation(SerieSearchFormTranslations);
    }

    public handleSubmit(event: any) {
        event.stopPropagation();
        event.preventDefault();
        this.props.search();
    };

    public render() {
        return (
            <form className="w-100" onSubmit={this.handleSubmit}>
                <div className="row w-100">
                    <div className="col">
                        {this.props.children}
                    </div>
                    <Button type="submit" variant="primary" extraClasses="col-2 text-truncate">
                        <Translate id="SearieSearch.Form.search" />
                    </Button>
                </div>
            </form>
        );
    }
}

export const UnLocalizeSerieSearchForm = connect(null, { search })(UnConnectedSerieSearchForm);

export const SerieSearchForm = withLocalize(UnLocalizeSerieSearchForm);

export default SerieSearchForm;
