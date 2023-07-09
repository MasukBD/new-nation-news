/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import EI1 from '../../assets/images/editorsInsight1.png';
import EI2 from '../../assets/images/editorsInsight2.png';
import EI3 from '../../assets/images/editorsInsight3.png';
import { Link } from 'react-router-dom';

const EditorInsight = () => {
    return (
        <div className='mt-4'>
            <h3>Editors Insight</h3>
            <div>
                <Row>
                    <Col sm={12} lg={4}>
                        <Card>
                            <Card.Img variant="top" src={EI1} />
                            <Card.Body>
                                <Card.Title>Dangerous Effect of using Mobile long time</Card.Title>
                                <Card.Text>
                                    Overuse of cell phones can act as a barrier to quality interactions and conversations, leading to decreased satisfaction in our relationships.
                                </Card.Text>
                                <Link><Button variant="danger">Learn More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4}>
                        <Card>
                            <Card.Img variant="top" src={EI2} />
                            <Card.Body>
                                <Card.Title>Dangerous Effect of using Mobile long time</Card.Title>
                                <Card.Text>
                                    Overuse of cell phones can act as a barrier to quality interactions and conversations, leading to decreased satisfaction in our relationships.
                                </Card.Text>
                                <Link><Button variant="danger">Learn More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={4}>
                        <Card>
                            <Card.Img variant="top" src={EI3} />
                            <Card.Body>
                                <Card.Title>Dangerous Effect of using Mobile long time</Card.Title>
                                <Card.Text>
                                    Overuse of cell phones can act as a barrier to quality interactions and conversations, leading to decreased satisfaction in our relationships.
                                </Card.Text>
                                <Link><Button variant="danger">Learn More</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default EditorInsight;