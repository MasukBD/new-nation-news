/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, rating, image_url, thumbnail_url, author, details, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center flex-grow-1'>
                        <Image width={50} src={author?.img} roundedCircle />
                        <div className='ps-2'>
                            <h6 className='mb-0'>{author?.name}</h6>
                            <p>{moment(author.published_date).format('MMMM Do YYYY')}</p>
                        </div>
                    </div>
                    <div>
                        <FaShareAlt></FaShareAlt>
                        <FaBookmark className='ms-2'></FaBookmark>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Title className='mt-2'>{title}</Card.Title>
                <Card.Text>
                    <>{details.length > 300 ? <>{details.slice(0, 300)}...<Link className='text-warning' to={`/news/${_id}`}>Read More</Link></> : <>{details}</>}</>
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='align-items-center flex-grow-1'>
                    <Rating
                        readonly
                        placeholderRating={rating?.number}
                        emptySymbol={<FaStar></FaStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    ></Rating>
                    <span className='ps-2'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;