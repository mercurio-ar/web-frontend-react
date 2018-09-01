import * as React from 'react';

export function ModalBody(props: React.Props<any>) {
    return (
        <div className="modal-body">
            {props.children}
        </div>
    );
}
