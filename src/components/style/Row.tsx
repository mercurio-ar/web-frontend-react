import * as React from 'react';

function Row(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>){
    return (
        <div className="row" {...props} />
    );
}

export default Row;