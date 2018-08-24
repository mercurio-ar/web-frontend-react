import * as React from 'react';

export default function SideBarGroupItem(props: React.Props<any>) {
    return (
        <li className="nav-item">
            {props.children}
        </li>
    );
}