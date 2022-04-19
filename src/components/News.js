import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalArticles: 0
        }
    }

    handlPrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newsType}&apiKey=30ea0ceca22b42958b4d2fba9a800165&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parshData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parshData.articles,
            loading: false
        });
        console.log("handlPrevClick");
    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newsType}&apiKey=30ea0ceca22b42958b4d2fba9a800165&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parshData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parshData.articles,
            loading: false
        });
        console.log("handleNextClick");
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.newsType}&apiKey=30ea0ceca22b42958b4d2fba9a800165&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parshData = await data.json();
        this.setState({ articles: parshData.articles, totalArticles: parshData.totalResults, loading: false });
        console.log(this.state.totalArticles);
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '7em' }}>
                <div className="row">
                    {this.state.loading && <Spinner />}
                    {this.state.articles.map((element) => {
                        return (!this.state.loading) && (<div key={element.url} className="col-md-3">
                            <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage === null ? "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg" : element.urlToImage} newsUrl={element.url} />
                        </div>)
                    })}

                </div>
                <div className=" d-flex justify-content-between fixed-bottom">
                    <button disabled={this.state.page <= 1} type="button" className="btn-lg  btn-outline-success" onClick={this.handlPrevClick}><b>&lt;</b></button>
                    <button type="button" className=" btn-lg btn-outline-success " disabled={(this.state.page + 1) > Math.ceil((this.state.totalArticles) / (this.pageSize))} onClick={this.handleNextClick}><b>&gt;</b> </button>
                </div>
            </div >
        )
    }
}


News.propType = {
    country: PropTypes.string,
    newsType: PropTypes.string,
    pageSize: PropTypes.number,
    page: PropTypes.number,
};

News.defaultProps = {
    country: 'in',
    newsType: 'general',
    page: 1,
    pageSize: 12
}