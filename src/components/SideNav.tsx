import * as React from 'react';

class SideNav extends React.Component {
    
    public render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-user float-right" />
                            Profile
                <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fas fa-users float-right" />
                            Organizations
            </a>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Recent Visualizations</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="float-right"><i className="far fa-times-circle" /></span>
                            Visualization 04
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="float-right"><i className="far fa-times-circle" /></span>
                            Visualization 03
            </a>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>My Visualizations</span>
                    <a className="d-flex align-items-center text-muted" href="#" />
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            <span className="float-right"><i className="far fa-times-circle" /></span>
                            Visualization 01
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="float-right"><i className="far fa-times-circle" /></span>
                            Visualization 02
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="float-right"><i className="far fa-times-circle" /></span>
                            Visualization 03
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="float-right"><i className="far fa-times-circle" /></span>
                            Visualization 04
            </a>
                    </li>
                </ul>


                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Shared Visualizations</span>
                    <a className="d-flex align-items-center text-muted" href="#" />
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="float-right"><i className="far fa-times-circle" /></span>
                            Visualization 05
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="float-right"><i className="far fa-times-circle" /></span>
                            Visualization 06
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="float-right"><i className="far fa-times-circle" /></span>
                            Visualization 07
            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="float-right"><i className="far fa-times-circle" /></span>
                            Visualization 08
            </a>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default SideNav;