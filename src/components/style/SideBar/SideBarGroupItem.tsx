import * as React from 'react';

export function SideBarGroupItem(props: React.Props<any>) {
    return (
        <li className="nav-item">
            {props.children}
        </li>
    );
}
