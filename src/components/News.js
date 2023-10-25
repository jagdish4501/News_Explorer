import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import Spinner from './Spinner';

const News = ({ country = 'in', newsType = 'general' }) => {
    const [articles, setArticles] = useState([]);
    const loading = useRef(true);
    const article = useRef([])
    const pageRef = useRef(1)
    const total_page = useRef(0)
    const fetchData = async (pageNo) => {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${newsType}&apiKey=70fdb9ba81ba40b6bda148e672898bd9&page=${pageNo}&pageSize=${12}`;
            loading.current = true

            const response = await fetch(url);
            const parsedData = await response.json();
            total_page.current = parsedData.totalResults / 12;
            setArticles([...articles, parsedData.articles])
            article.current = parsedData.articles
            loading.current = false
            console.log("fetch data", newsType)
        } catch (error) {
            console.error('Error fetching data:', error);
            loading.current = false
            return []
        }
    };


    useEffect(() => {
        article.current = []
        pageRef.current = 1
        loading.current = true
        fetchData(pageRef.current);
    }, [country, newsType]);

    console.log("check")


    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight && total_page.current > pageRef.current) {
                pageRef.current = pageRef.current + 1;
                fetchData(pageRef.current);
            }
        };
        window.document.addEventListener('scroll', handleScroll);
        return () => window.document.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="container">
            <div className="row">
                {loading.current && <Spinner />}
                {article.current.map((element, index) => (
                    !loading.current && (
                        <div key={index} className="col-md-3">
                            <Card
                                title={element.title}
                                description={element.description}
                                urlToImage={
                                    element.urlToImage === null
                                        ? 'https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg'
                                        : element.urlToImage
                                }
                                newsUrl={element.url}
                            />
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default News;
