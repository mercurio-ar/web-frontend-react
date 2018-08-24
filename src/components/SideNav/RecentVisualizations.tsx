import * as React from 'react';

import SideBarGroup from '../style/SideBarGroup';
import SideBarGroupItem from '../style/SideBarGroupItem';
import SideBarHeading from '../style/SideBarHeading';


export default function RecentVisualizations(props: React.Props<any>) {
    return (
        <div>
            <SideBarHeading>
                <span>Recent Visualizations</span>
            </SideBarHeading>
            <SideBarGroup>
                <SideBarGroupItem>
                    <a className="nav-link" href="#">
                        <span className="float-right"><i className="far fa-times-circle" /></span>
                        Visualization 04
            </a>
                </SideBarGroupItem>
                <SideBarGroupItem>
                    <a className="nav-link" href="#">
                        <span className="float-right"><i className="far fa-times-circle" /></span>
                        Visualization 03
            </a>
                </SideBarGroupItem>
            </SideBarGroup>
        </div>
    );
}