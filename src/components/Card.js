import React from 'react';
import './Card.css'
const Card = ({ title, description, urlToImage, newsUrl }) => {
    return (
        <div className="grid__item">
            <div className="card"><img className="card__img" src={urlToImage} alt="Snowy Mountains" />
                <div className="card__content">
                    <div className="card__header">{title}</div>
                    <p className="card__text">{description}</p>
                    <button className="card__btn">Explore <span>&rarr;</span></button>
                </div>
            </div>
        </div>
    );
};

export default Card;
