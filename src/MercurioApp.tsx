import * as React from 'react';

import './MercurioApp.css'

class MercurioApp extends React.Component {

    public render() {
        return (
            <div>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Mercurio</a>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">Sign Out</a>
                        </li>
                    </ul>
                </nav>

                <div className="container-fluid">
                    <div className="row">
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

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Visualization 01</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">
                                        <button className="btn btn-sm btn-outline-secondary">Add Serie</button>
                                        <button className="btn btn-sm btn-outline-secondary">Take Snapshot</button>
                                        <button className="btn btn-sm btn-outline-secondary">Share</button>
                                        <button className="btn btn-sm btn-outline-secondary">Export</button>
                                    </div>
                                </div>
                            </div>

                            <canvas className="my-4 w-100" id="myChart" width="900" height="380" />
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default MercurioApp