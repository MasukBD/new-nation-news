/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Catagory = () => {
    const { id } = useParams();
    const catagorizedNews = useLoaderData();
    return (
        <div>
            {
                catagorizedNews.length > 0 ? catagorizedNews.map(n => <NewsCard key={n._id} news={n}></NewsCard>) : <h2>No Data Available at this moment!!!</h2>
            }
        </div>
    );
};

export default Catagory;