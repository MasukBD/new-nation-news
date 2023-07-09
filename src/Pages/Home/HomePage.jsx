/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';

const HomePage = () => {
    const allNews = useLoaderData();
    return (
        <div>
            {
                allNews.map(n => <NewsCard key={n._id} news={n}></NewsCard>)
            }
        </div>
    );
};

export default HomePage;