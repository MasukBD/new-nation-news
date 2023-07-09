/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsight from './EditorInsight';

const NewsPage = () => {
    const news = useLoaderData();
    const { _id, title, rating, image_url, details, category_id } = news;
    return (
        <>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/catagories/${category_id}`}><Button variant="danger"> <FaArrowLeft></FaArrowLeft> See All of This Catagory</Button></Link>
                </Card.Body>
            </Card>
            <EditorInsight></EditorInsight>
        </>
    );
};

export default NewsPage;