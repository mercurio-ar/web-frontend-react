import * as React from 'react';

export default function SideBarGroup(props: React.Props<any>) {
    return (
        <ul className="nav flex-column">
            {props.children}
        </ul>
    );
}