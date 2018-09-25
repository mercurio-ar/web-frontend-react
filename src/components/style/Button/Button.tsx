import * as React from 'react';


interface IButtonProps extends React.Props<any> {
    extraClasses?: string
    type?: 'submit' | 'reset' | 'button';
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark';
    onClick?: (event?: React.SyntheticEvent<any>) => void;
}

export function Button(props: IButtonProps) {
    const variant = (props.variant && `btn-${props.variant}`) || ''
    const extraClasses = props.extraClasses || '';
    const buttonProps = {
        children: props.children,
        onClick: props.onClick,
        type: props.type,
    }
    return (
        <button
            {...buttonProps}
            className={`btn ${variant || ''} ${extraClasses}`}
        />
    );
}
