import React from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

const Resources = () => {
    return (
        <div className="home-content">
            <h2>Resources</h2>
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Blog Post</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                             </Card.Text>
                             <LinkContainer to="/blog">
                            <Button variant="primary">View Blog</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 col-sm-12">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Recipe</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                             </Card.Text>
                             <LinkContainer to="/recipes">
                            <Button variant="primary">View Blog</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 col-sm-12">
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Health Tip</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                             </Card.Text>
                             <LinkContainer to="/tip">
                            <Button variant="primary">View Blog</Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Resources;