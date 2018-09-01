import * as React from 'react';

export function ModalFooter(props: React.Props<any>) {
    return (
        <div className="modal-footer">
            {props.children}
        </div>
    );
}
