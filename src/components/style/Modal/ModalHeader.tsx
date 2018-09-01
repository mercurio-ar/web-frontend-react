import * as React from 'react';

export function ModalHeader(props: React.Props<any>) {
    return (
        <div className="modal-header">
            {props.children}
        </div>
    );
}