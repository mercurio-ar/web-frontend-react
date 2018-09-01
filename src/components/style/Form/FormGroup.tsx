import * as React from 'react';

export function FormGroup(props: React.Props<any>){
    return (
        <div className="form-group">{props.children}</div>
    );
}