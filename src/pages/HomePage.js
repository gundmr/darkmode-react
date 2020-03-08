import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// IMAGES
import pic from '../assets/pic.jpeg';

import Content from '../components/Content';


function HomePage() {

    return(
        <div>

            <Container fluid={true}>
                <Row className="justify-content-right py-2 profile-image">
                    <Col md={8} sm={12}>
                        <img src={ pic } alt="profile" width="100%"/>
                    </Col>
                </Row>
                <Row className="justify-content-left py-2">
                    <Col md={8} sm={12}>
                        <h1 className="display-1 font-weight-bolder">Rachel Gundy</h1>
                        <h3 className="display-5 font-weight-light">Software Engineer in Seattle</h3>
                    </Col>
                </Row>
            </Container>

            <Content>
                    <p>Hello, my name is Rachel. I'm a full stack engineer leveraging a background in Product Managment to build a more intuitive user experience on the web. </p>

                    <p>I'm driven by working on products that delight users, solves complex customer problems with simple solutions, while driving significant business outcomes.</p>

                    <p>While my experience is with MongoDB, JavaScript, React.js and Node.js, I am always striving to learn new things. </p>
                    
                
            </Content>

        </div>
    );
}

export default HomePage;