import * as React from 'react';

interface IContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    fluid?: boolean;
}

function Container(props: IContainerProps) {
    const klass = `container${props.fluid ? '-fluid' : ''}`
    const divProps = Object.assign({}, props)
    delete divProps.fluid
    return (
        <div className={klass} {...divProps} />
    );
}

export default Container;