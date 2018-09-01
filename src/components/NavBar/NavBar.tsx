import * as React from 'react';

import NavBarSearchBox from './NavBarSearchBox';


class NavBar extends React.Component {

    public render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Mercurio</a>
                <NavBarSearchBox />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">Sign Out</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;