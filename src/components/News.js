import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import Spiner from './Spiner.gif'
import './News.css'
const News = ({ country = 'in', newsType = 'general', theme }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const page = useRef(1)
    const total_page = useRef(2)
    async function fetchData(change) {
        try {
            const url = `https://new-api-fnsb.onrender.com/api/top-headlines?country=${country}&category=${newsType}&page=${page.current}&pageSize=${12}`;
            if (total_page.current + 1 > page.current) {
                setLoading(true)
                page.current = page.current + 1;
                const response = await fetch(url);
                const parsedData = await response.json();
                total_page.current = parsedData.totalResults / 12;
                change ? setArticles([...parsedData.articles]) : setArticles([...articles, ...parsedData.articles]);
            } else window.alert("No more News");
            setLoading(false)
        } catch (error) {
            page.current = 1; total_page.current = 2;
            window.alert('Something went wrong try again')
            console.error('Error Handelar Message From Fetch Data:', error);
            setLoading(false)
        }
    };
    // eslint-disable-next-line
    useEffect(() => { page.current = 1; total_page.current = 2; fetchData(true); }, [newsType, country])
    // useEffect(() => {
    //     if (scroll.current) {
    //         let x = scroll.current
    //         const handleScroll = () => {
    //             const { scrollTop, clientHeight, scrollHeight } = x;
    //             if (scrollTop + clientHeight >= scrollHeight) {
    //                 console.log('fetchData', total_page.current, page.current)
    //                 fetchData(false)
    //             }
    //         };
    //         x.addEventListener('scroll', handleScroll);
    //         return () => x.removeEventListener('scroll', handleScroll);
    //     }
    // }, []);

    return (
        <div>
            <div className='Container'>
                {articles.map((element, index) => (
                    <Card key={index}
                        className='Card'
                        title={element.title}
                        description={element.description}
                        urlToImage={element.urlToImage}
                        newsUrl={element.url}
                        theme={theme}
                    />))}
            </div>

            {!loading &&
                <div className='Container'>
                    <button onClick={() => { fetchData(false) }} className='button'>Show More</button>
                </div>
            }

            {loading &&
                <div className='Loader'>
                    <img src={Spiner} alt="loading" style={{ height: '80px', width: '80px' }} />
                    <h1>Please wait for 2 minutes as our backend server wakes up from sleep.</h1>
                </div>
            }
        </div>
    );
};

export default News;
