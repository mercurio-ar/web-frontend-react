import * as React from 'react';
import { LocalizeProvider } from 'react-localize-redux';
import { Provider } from 'react-redux';

import configureStore from './configureStore';


export default function MercurioAppWrapper(props: React.Props<any>) {
    return (
        <LocalizeProvider>
            <Provider store={configureStore()}>
                {props.children}
            </Provider>
        </LocalizeProvider>
    );
}