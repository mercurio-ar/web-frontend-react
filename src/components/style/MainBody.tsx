import * as React from 'react';

export function MainBody(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4" {...props} />
    );
}
