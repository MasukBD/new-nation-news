/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';
import useTitle from '../../Hook/useTitle';

const Catagory = () => {
    const { id } = useParams();
    const catagorizedNews = useLoaderData();
    useTitle(`${id == 0 && 'All News' || id == 1 && 'Breaking News' || id == 2 && 'Regular News' || id == 3 && 'International' || id == 4 && 'Sports' || id == 5 && 'Entertainment' || id == 6 && 'Culture' || id == 7 && 'Arts'}`);
    return (
        <div>
            {
                catagorizedNews.length > 0 ? catagorizedNews.map(n => <NewsCard key={n._id} news={n}></NewsCard>) : <h2>No Data Available at this moment!!!</h2>
            }
        </div>
    );
};

export default Catagory;