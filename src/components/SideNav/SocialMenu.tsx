import * as React from 'react';

import SideBarGroup from '../style/SideBarGroup';
import SideBarGroupItem from '../style/SideBarGroupItem';


export default function SocialMenu(props: React.Props<any>) {
    return (
        <SideBarGroup>
            <SideBarGroupItem>
                <a className="nav-link" href="#">
                    <i className="fas fa-user float-right" />
                    Profile
    <span className="sr-only">(current)</span>
                </a>
            </SideBarGroupItem>
            <SideBarGroupItem>
                <a className="nav-link" href="#">
                    <i className="fas fa-users float-right" />
                    Organizations
</a>
            </SideBarGroupItem>
        </SideBarGroup>
    );
}