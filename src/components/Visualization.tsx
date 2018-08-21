import * as React from 'react';

class Visualization extends React.Component {
    public render(){
        return (
            <div>
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
            </div>
        );
    }
}

export default Visualization;