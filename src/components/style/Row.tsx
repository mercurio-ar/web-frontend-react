import * as React from 'react';

export function Row(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>){
    return (
        <div className="row" {...props} />
    );
}
