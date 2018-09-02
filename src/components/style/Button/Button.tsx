import * as React from 'react';


interface IButtonProps extends React.Props<any> {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark';
    onClick?: () => void;
}

export function Button(props: IButtonProps) {
    const variant = (props.variant && `btn-${props.variant}`) || ''
    return (
        <button
            type="button"
            className={`btn ${variant || ''}`}
            {...props}
        />
    );
}
