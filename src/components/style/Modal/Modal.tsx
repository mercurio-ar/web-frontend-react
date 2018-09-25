import * as React from 'react';

import { Modal as UiModal } from '@material-ui/core';


export interface IModalProps extends React.Props<any> {
    open: boolean;
    onClose: () => void;
}

export function Modal(props: IModalProps) {
    return (
        <UiModal {...props}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </UiModal>
    );
}
