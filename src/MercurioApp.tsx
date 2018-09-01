import * as React from 'react';

import './MercurioApp.css'

import VisualizationsController from './controllers/VisualizationsController';

import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import Visualization from './components/Visualization';

import {Container, MainBody, Row} from './components/style';

class MercurioApp extends React.Component {

    public render() {
        return (
            <div>
                <VisualizationsController />
                <NavBar/>

                <Container fluid={true}>
                    <Row>
                        <SideNav />
                        <MainBody>
                            <Visualization />
                        </MainBody>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MercurioApp