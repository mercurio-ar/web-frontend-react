import * as React from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';


export default function MercurioAppWrapper(props: React.Props<any>){
    return (
        <Provider store={configureStore()}>
            {props.children}
        </Provider>
    );
}