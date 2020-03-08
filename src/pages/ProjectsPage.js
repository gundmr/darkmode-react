import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from '../components/Carousel';

function ProjectsPage() {

    return(
        <div>
            <Container fluid={true}>
            <Row className="justify-content-left py-2">
                <Col md={8} sm={12}>
                    <h1 className="display-1 font-weight-bolder">Personal Projects</h1>
                    <h3 className="display-5 font-weight-light">Click on Projects for Additional Details:</h3>
                </Col>
            </Row>
        </Container>

        <Carousel />
        </div>
        

    );
}

export default ProjectsPage;