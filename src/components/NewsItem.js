import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewsItem extends Component {
    render() {
        return (
            <div className="card my-2 mx-2" >
                <img className="card-img-top" src={this.props.urlToImage} alt="images Not found" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text ">
                        {this.props.description}
                    </p>
                    <a href={this.props.newsUrl} target="_blank" className="btn btn-primary btn-sm " rel="noopener noreferrer">Read more</a>
                </div>
            </div>
        )
    }
}

NewsItem.propType = {
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    newsUrl: PropTypes.string
};

NewsItem.defaultProps = {
    // urlToImage: 'https://images.gnwcdn.com/2022/articles/2022-01-18-14-09/actibliz.jpg'
};