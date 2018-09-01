import * as React from 'react';

import MyVisualizations from './MyVisualizations';
import RecentVisualizations from './RecentVisualizations';
import SharedVisualizations from './SharedVisualizations';
import SocialMenu from './SocialMenu';

import { SideBar } from '../style';


class SideNav extends React.Component {

    public render() {
        return (
            <SideBar>
                <SocialMenu />
                <RecentVisualizations />
                <MyVisualizations />
                <SharedVisualizations />
            </SideBar>
        );
    }
}

export default SideNav;