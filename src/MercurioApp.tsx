import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';

import './MercurioApp.css'

import VisualizationsController from './controllers/VisualizationsController';

import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import Visualization from './components/Visualization';

import { Container, MainBody, Row } from './components/style';


interface IUnLocalizedMercurioAppProps extends React.Props<any> {

}

type IMercurioAppProps = LocalizeContextProps & IUnLocalizedMercurioAppProps;

export class UnLocalizedMercurioApp extends React.Component<IMercurioAppProps> {
    constructor(props: IMercurioAppProps) {
        super(props);

        this.props.initialize({
            languages: [
                { name: "English", code: "en" },
                { name: "Spanish", code: "sp" }
            ],
            options: { renderToStaticMarkup },
        });
    }

    public render() {
        return (
            <div>
                <VisualizationsController />
                <NavBar />

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

export const MercurioApp = withLocalize(UnLocalizedMercurioApp);

export default MercurioApp;
