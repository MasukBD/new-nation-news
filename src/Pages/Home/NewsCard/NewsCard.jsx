/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, rating, image_url, thumbnail_url, author, details } = news;
    return (
        <Card className="mb-4">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Title className='mt-2'>{title}</Card.Title>
                <Card.Text>
                    <>{details.length > 300 ? <p>{details.slice(0, 300)}...<Link className='text-warning' to={`/news/${_id}`}>Read More</Link></p> : <>{details}</>}</>
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCard;