import * as React from 'react';

import SideBarGroup from '../style/SideBarGroup';
import SideBarGroupItem from '../style/SideBarGroupItem';
import SideBarHeading from '../style/SideBarHeading';

export default function MyVisualizations(props: React.Props<any>) {
    return (
        <div>
            <SideBarHeading>
                <span>My Visualizations</span>
                <a className="d-flex align-items-center text-muted" href="#" />
            </SideBarHeading>
            <SideBarGroup>
                <SideBarGroupItem>
                    <a className="nav-link active" href="#">
                        <span className="float-right"><i className="far fa-times-circle" /></span>
                        Visualization 01
</a>
                </SideBarGroupItem>
                <SideBarGroupItem>
                    <a className="nav-link" href="#">
                        <span className="float-right"><i className="far fa-times-circle" /></span>
                        Visualization 02
</a>
                </SideBarGroupItem>
                <SideBarGroupItem>
                    <a className="nav-link" href="#">
                        <span className="float-right"><i className="far fa-times-circle" /></span>
                        Visualization 03
</a>
                </SideBarGroupItem>
                <SideBarGroupItem>
                    <a className="nav-link" href="#">
                        <span className="float-right"><i className="far fa-times-circle" /></span>
                        Visualization 04
</a>
                </SideBarGroupItem>
            </SideBarGroup>
        </div>
    );
}