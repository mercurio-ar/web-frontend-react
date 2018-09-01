import * as React from 'react';

export function SideBarHeading(props: React.Props<any>) {
    return (
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            {props.children}
        </h6>
    );
}
