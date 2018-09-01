import * as React from 'react';

export function ModalTitle(props: React.Props<any>){
    return (
        <h5 className="modal-title">
            {props.children}
        </h5>
    );
}   