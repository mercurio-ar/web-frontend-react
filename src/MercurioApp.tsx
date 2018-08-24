import * as React from 'react';

import './MercurioApp.css'

import NavBar from './components/NavBar';
import SideNav from './components/SideNav/SideNav';
import Visualization from './components/Visualization/Visualization';

import Container from './components/style/Container';
import MainBody from './components/style/MainBody';
import Row from './components/style/Row';

class MercurioApp extends React.Component {

    public render() {
        return (
            <div>
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