import * as React from 'react';

import {SideBarGroup, SideBarGroupItem, SideBarHeading} from '../style';


export default function SharedVisualizations(props: React.Props<any>) {
    return (
        <div>
            <SideBarHeading>
                <span>Shared Visualizations</span>
                <a className="d-flex align-items-center text-muted" href="#" />
            </SideBarHeading>
            <SideBarGroup>
                <SideBarGroupItem>
                    <a className="nav-link" href="#">
                        <span className="float-right"><i className="far fa-times-circle" /></span>
                        Visualization 05
    </a>
                </SideBarGroupItem>
                <SideBarGroupItem>
                    <a className="nav-link" href="#">
                        <span className="float-right"><i className="far fa-times-circle" /></span>
                        Visualization 06
    </a>
                </SideBarGroupItem>
                <SideBarGroupItem>
                    <a className="nav-link" href="#">
                        <span className="float-right"><i className="far fa-times-circle" /></span>
                        Visualization 07
    </a>
                </SideBarGroupItem>
                <SideBarGroupItem>
                    <a className="nav-link" href="#">
                        <span className="float-right"><i className="far fa-times-circle" /></span>
                        Visualization 08
    </a>
                </SideBarGroupItem>
            </SideBarGroup>
        </div>
    );
}