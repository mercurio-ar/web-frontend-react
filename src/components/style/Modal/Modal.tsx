import * as React from 'react';

interface IModalProps extends React.Props<any> {
    isOpen: boolean;
    onClose: () => void;
}

export function Modal(props: IModalProps) {
    return (
        <div className="modal" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}