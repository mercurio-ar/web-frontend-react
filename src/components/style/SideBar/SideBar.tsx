import * as React from 'react';

export function SideBar(props: React.Props<any>) {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                {props.children}
            </div>
        </nav>
    );
}
