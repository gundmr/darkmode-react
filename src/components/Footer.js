import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="bottom-bar">
                {/* <Row className="border-top justify-content-center p-3 bottom-bar"> */}
                    <p>Copyright &copy;</p>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;